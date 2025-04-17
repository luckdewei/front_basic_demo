<template>
  <div style="width: 100%; height: 100vh;display: flex;justify-content: center;align-items: center">
    <button @click="add">Add</button>
    <div id="antvcontainer"></div>
  </div>
  
 
</template>
 
<script lang="ts" setup>
import { onMounted, ref } from "vue";
import {Cell, Graph, Path} from "@antv/x6";
import AlgoNode from "./components/AlgoNode.vue";
import { register } from '@antv/x6-vue-shape'
import { Selection } from '@antv/x6-plugin-selection'
 
// AlgoNode 组件
 
register({
  shape: 'dag-node', // 自定义节点的名称
  width: 180, // 节点的宽度
  height: 36, // 节点的高度
  component: AlgoNode, // 与此节点关联的组件（通常用于渲染节点的内容）
  ports: { // 定义节点的连接点（ports）
    groups: {
      left: { // 左侧连接点组
        position: 'left', // 连接点的位置
        attrs: {
          circle: { // 连接点的形状和样式
            r: 4,
            magnet: true,
            stroke: '#C2C8D5',
            strokeWidth: 1,
            fill: '#fff',
          },
        },
      },
      right: { // 右侧连接点组
        position: 'right', // 连接点的位置
        attrs: {
          circle: { // 连接点的形状和样式
            r: 4,
            magnet: true,
            stroke: '#C2C8D5',
            strokeWidth: 1,
            fill: '#fff',
          },
        },
      },
    },
  }
});
// 注册自定义边样式
Graph.registerEdge(
    "dag-edge",
    {
      inherit: "edge",
      attrs: {
        line: {
          stroke: "#C2C8D5",
          strokeWidth: 1,
          targetMarker: null,
        },
      },
    },
    true
);
//注册连接器的样式
Graph.registerConnector(
    'algo-connector',
    (sourcePoint, targetPoint) => {
      const hgap = Math.abs(targetPoint.x - sourcePoint.x)
      const path = new Path()
      path.appendSegment(
          Path.createSegment('M', sourcePoint.x - 4, sourcePoint.y),
      )
      path.appendSegment(
          Path.createSegment('L', sourcePoint.x + 12, sourcePoint.y),
      )
      // 水平三阶贝塞尔曲线
      path.appendSegment(
          Path.createSegment(
              'C',
              sourcePoint.x < targetPoint.x
                  ? sourcePoint.x + hgap / 2
                  : sourcePoint.x - hgap / 2,
              sourcePoint.y,
              sourcePoint.x < targetPoint.x
                  ? targetPoint.x - hgap / 2
                  : targetPoint.x + hgap / 2,
              targetPoint.y,
              targetPoint.x - 6,
              targetPoint.y,
          ),
      )
      path.appendSegment(
          Path.createSegment('L', targetPoint.x + 2, targetPoint.y),
      )
 
      return path.serialize()
    },
    true,
)
 
 
// 定义 graph 的引用
const graph = ref<Graph | null>(null);
// 节点状态的类型定义
interface NodeStatus {
  id: string;
  status: "default" | "success" | "failed" | "running";
  label?: string;
}

 
const buildAntvX6Container = () => {
  const container = document.getElementById("antvcontainer");
  if (!container) {
    console.error("AntV X6 容器未找到");
    return;
  }
  // 创建图形实例
  graph.value = new Graph({
    container: container,
    // autoResize: true,
    width: 2000,
    height: 2000,
    panning: {
      enabled: true,
      eventTypes: ["leftMouseDown", "mouseWheel"],
    },
    mousewheel: true,
    background: {
      color: "#d9e4f5",
    },
    grid: {
      visible: true,
      type: "doubleMesh",
      args: [
        {
          color: "#eee",
          thickness: 1,
        },
        {
          color: "#ddd",
          thickness: 1,
          factor: 4,
        },
      ],
    },
    connecting: {
      connector: 'algo-connector',
      snap: { radius: 50 },
      allowBlank: false,
      allowLoop: false,
      allowNode: false,
      allowEdge: false,
      allowMulti: true,
      highlight: true,
      validateMagnet({ magnet }) {
        return magnet.getAttribute("port-group") !== "left";
      },
      createEdge() {
        return graph.value!.createEdge({
          shape: "dag-edge",
          attrs: {
            line: {
              strokeDasharray: "5 5",
            },
          },
          zIndex: -1,
        });
      },
    },
    highlighting: {
      magnetAvailable: {
        name: "stroke",
        args: {
          attrs: {
            fill: "#fff",
            stroke: "#31d0c6",
            strokeWidth: 4,
          },
        },
      },
    },
  });
 
 
  // 使用选择插件
  graph.value.use(
      new Selection ({
        multiple: true,
        rubberEdge: true,
        rubberNode: true,
        modifiers: 'shift',
        rubberband: true,
      })
  )
  // 监听边连接事件
  graph.value.on('edge:connected', ({ edge }) => {
    edge.attr({
      line: {
        strokeDasharray: '',
      },
    })
  })
  // 监听节点数据变化事件
  graph.value.on('node:change:data', ({ node }) => {
    const edges = graph.value!.getIncomingEdges(node) // 获取入边
    const { status } = node.getData() as { status: string } // 获取节点状态
 
    edges?.forEach((edge) => {
      if (status === 'running') {
        edge.attr('line/strokeDasharray', 5) // 设置虚线
        edge.attr('line/style/animation', 'running-line 30s infinite linear') // 添加动画
      } else {
        edge.attr('line/strokeDasharray', '') // 清除虚线
        edge.attr('line/style/animation', '') // 移除动画
      }
    })
  })
 
};
 
// 节点状态列表
const nodeStatusList: NodeStatus[][] = [
  [
    { id: "1", status: "running" },
    { id: "2", status: "default" },
    { id: "3", status: "default" },
    { id: "4", status: "default" },
  ],
  [
    { id: "1", status: "success" },
    { id: "2", status: "running" },
    { id: "3", status: "default" },
    { id: "4", status: "default" },
  ],
  [
    { id: "1", status: "success" },
    { id: "2", status: "success" },
    { id: "3", status: "running" },
    { id: "4", status: "running" },
  ],
  [
    { id: "1", status: "success" },
    { id: "2", status: "success" },
    { id: "3", status: "success" },
    { id: "4", status: "failed" },
  ],
];
 
const showNodeStatus = async (statusList: NodeStatus[][]) => {
  const status = statusList.shift();
  if (status) {
    status.forEach(({ id, status }) => {
      const node = graph.value!.getCellById(id);
      const data = node.getData() as NodeStatus;
      node.setData({
        ...data,
        status,
      });
    });
    setTimeout(() => {
      showNodeStatus(statusList);
    }, 3000 );
  }
};
 
// 初始化节点和边
const initData: Cell.Metadata[] = [
  {
    id: "1",
    shape: "dag-node",
    x: 300,
    y: 110,
    data: { label: "读数据", status: "success" },
    ports: [{ id: "1-1", group: "right" }],
  },
  {
    id: "2",
    shape: "dag-node",
    x: 600,
    y: 110,
    data: { label: "逻辑回归", status: "success" },
    ports: [
      { id: "2-1", group: "left" },
      { id: "2-2", group: "right" },
      { id: "2-3", group: "right" },
    ],
  },
  {
    id: "3",
    shape: "dag-node",
    x: 900,
    y: 0,
    data: { label: "模型预测", status: "success" },
    ports: [
      { id: "3-1", group: "left" },
      { id: "3-2", group: "right" },
    ],
  },
  {
    id: "4",
    shape: "dag-node",
    x: 900,
    y: 300,
    data: { label: "读取参数", status: "success" },
    ports: [
      { id: "4-1", group: "left" },
      { id: "4-2", group: "right" },
    ],
  },
  {
    id: "5",
    shape: "dag-edge",
    source: { cell: "1", port: "1-1" },
    target: { cell: "2", port: "2-1" },
    zIndex: 0,
  },
  {
    id: "6",
    shape: "dag-edge",
    source: { cell: "2", port: "2-2" },
    target: { cell: "3", port: "3-1" },
    zIndex: 0,
  },
  {
    id: "7",
    shape: "dag-edge",
    source: { cell: "2", port: "2-3" },
    target: { cell: "4", port: "4-1" },
    zIndex: 0,
  },
];
 
const init = (data: Cell.Metadata[]) => {
  const cells = data.map((item) => {
    if (item.shape === "dag-node") {
      return graph.value!.createNode(item);
    }
    return graph.value!.createEdge(item);
  });
  graph.value!.resetCells(cells);
};
 
// 挂载后初始化
onMounted(() => {
  buildAntvX6Container();
  init(initData);
  showNodeStatus(nodeStatusList);
  // 将画布中元素缩小或者放大一定级别，让画布正好容纳所有元素，可以通过 maxScale 配置最大缩放级别
  graph.value!.zoomToFit({ maxScale: 1 })
});

const add = () => {
  console.log('graph', graph.value);
  graph.value?.addNode({
    id: "5", // 使用唯一ID
    shape: "dag-node",
    x: Math.random() * 1000, // 随机位置
    y: Math.random() * 600,
    data: { label: "新节点", status: "success" },
    ports: [
      { id: "d-1", group: "left" },
      { id: "d-2", group: "right" },
    ]
  })
}
</script>
 
<style scoped>
 
</style>
 