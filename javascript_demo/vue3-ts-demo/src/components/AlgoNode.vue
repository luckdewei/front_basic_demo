<template>
  <div :class="['node', status]">
    <img :src="image.logo" alt="logo" />
    <span class="label">{{ label }}</span>
    <span class="status">
      <img v-if="status === 'success'" :src="image.success" alt="success" />
      <img v-if="status === 'failed'" :src="image.failed" alt="failed" />
      <img v-if="status === 'running'" :src="image.running" alt="running" />
    </span>
  </div>
</template>
 
<script setup lang="ts">
import {ref, onMounted, onBeforeUnmount} from 'vue';
 
// 定义响应式变量
const label = ref('');
const status = ref<'default' | 'success' | 'failed' | 'running'>('default');
 
// 图片路径
const image = {
  logo: 'https://gw.alipayobjects.com/mdn/rms_43231b/afts/img/A*evDjT5vjkX0AAAAAAAAAAAAAARQnAQ',
  success:
    'https://gw.alipayobjects.com/mdn/rms_43231b/afts/img/A*6l60T6h8TTQAAAAAAAAAAAAAARQnAQ',
  failed:
    'https://gw.alipayobjects.com/mdn/rms_43231b/afts/img/A*SEISQ6My-HoAAAAAAAAAAAAAARQnAQ',
  running:
    'https://gw.alipayobjects.com/mdn/rms_43231b/afts/img/A*t8fURKfgSOgAAAAAAAAAAAAAARQnAQ',
}
 
const props = defineProps<{
  node: {
    getData: () => { label: string; status: string };
    on: (event: string, callback: Function) => void;
    off: (event: string, callback: Function) => void;
  };
}>();
 
// 数据更新处理函数
const updateNodeData = () => {
  const data = props.node.getData();
  label.value = data.label;
  status.value = data.status as any;
};
 
 
 
// 监听节点数据变化
onMounted(() => {
  updateNodeData(); // 初始化数据
  props.node.on('change:data', updateNodeData);
});
 
// 清理监听器
onBeforeUnmount(() => {
  props.node.off('change:data', updateNodeData);
});
 
</script>
 
<style >
.node {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #fff;
  border: 1px solid #c2c8d5;
  border-left: 4px solid #5F95FF;
  border-radius: 4px;
  box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.06);
}
.node img {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  margin-left: 8px;
}
.node .label {
  display: inline-block;
  flex-shrink: 0;
  width: 104px;
  margin-left: 8px;
  color: #666;
  font-size: 12px;
}
.node .status {
  flex-shrink: 0;
}
.node.success {
  border-left: 4px solid #52c41a;
}
.node.failed {
  border-left: 4px solid #ff4d4f;
}
.node.running .status img {
  animation: spin 1s linear infinite;
}
.x6-node-selected .node {
  border-color: #1890ff;
  border-radius: 2px;
  box-shadow: 0 0 0 4px #d4e8fe;
}
.x6-node-selected .node.success {
  border-color: #52c41a;
  border-radius: 2px;
  box-shadow: 0 0 0 4px #ccecc0;
}
.x6-node-selected .node.failed {
  border-color: #ff4d4f;
  border-radius: 2px;
  box-shadow: 0 0 0 4px #fedcdc;
}
.x6-edge:hover path:nth-child(2){
  stroke: #1890ff;
  stroke-width: 1px;
}
 
.x6-edge-selected path:nth-child(2){
  stroke: #1890ff;
  stroke-width: 1.5px !important;
}
 
@keyframes running-line {
  to {
    stroke-dashoffset: -1000;
  }
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>