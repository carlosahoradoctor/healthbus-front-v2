import * as React from 'react';
import { TreeViewComponent } from '@syncfusion/ej2-react-navigations';
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
import { closest } from '@syncfusion/ej2-base';
import { enableRipple } from "@syncfusion/ej2-base";
import "./index.css";
import { dataSource } from "./dataSource/drag-data";
enableRipple(true);

function DragAndDrop() {
  const data = dataSource;
  let listObj;
  let id = 1;
  // Render the first TreeView by mapping its fields property with data source properties
  const field1 = { dataSource: data.defaultData, id: 'id', text: 'name', child: 'child' };
  const allowDragAndDrop1 = true;
  // Render the second TreeView by mapping its fields property with data source properties     
  const field2 = { dataSource: data.dragData1, id: 'id', text: 'name', child: 'child', selected: 'isSelected' };
  const allowDragAndDrop2 = true;

  function onDragStop(args) {
    let targetEle = closest(args.target, '.e-droppable');
    targetEle = targetEle ? targetEle : args.target;
    // Check the target as ListView or not
    if (targetEle && targetEle.classList.contains('custom-list')) {
      args.cancel = true;
      let newData = [];
      if (args.draggedNode.classList.contains('e-active')) {
        let dragNode = closest(args.draggedNode, '.e-treeview');
        let selNodes = dragNode.ej2_instances[0].selectedNodes;
        for (let i = 0, len = selNodes.length; i < len; i++) {
          let nodeEle = document.querySelector('[data-uid="' + selNodes[i] + '"]').querySelector('.e-list-text');
          let nodeText = nodeEle.textContent;
          let newNode = { id: 'l' + id, text: nodeText, class: 'custom-delete', iconId: 'i' + id };
          id++;
          newData.push(newNode);
        }
      }
      else {
        let text = 'text';
        let nodeText = args.draggedNodeData[text];
        let newNode = { id: 'l' + id, text: nodeText, class: 'custom-delete', iconId: 'i' + id };
        id++;
        newData.push(newNode);
      }
      // Add collection of node to ListView
      listObj.addItem(newData, undefined);
    }
  }
  // Add the custom action for delete icon in ListView
  function onCreate() {
    document.getElementById('tree1').addEventListener('mousedown', (event) => {
      if (event.target.classList.contains('custom-delete')) {
        let node = closest(event.target, 'li');
        listObj.removeItem(node);
      }
    });
    document.getElementById('overlay').addEventListener('mousedown', (event) => {
      document.getElementById('overlay').style.display = 'none';
    });
  }
  function actionBegin() {
    let listObj = this;
  }

  return (
    <div className="control-pane">
      <div className="col-lg-12 control-section custom-tree">
        <div className="control-wrapper">
          <div className="col-lg-4 tree1-data">
            <h4>TreeView-1</h4>
            <div className="content">
              <TreeViewComponent id='tree1' fields={field1} nodeDragStop={onDragStop.bind(this)} created={onCreate.bind(this)} allowDragAndDrop={allowDragAndDrop1} />
            </div>
          </div>
          <div className="col-lg-4 tree2-data">
            <h4>TreeView-2</h4>
            <div className="content">
              <TreeViewComponent id='tree2' fields={field2} nodeDragStop={onDragStop.bind(this)} allowDragAndDrop={allowDragAndDrop2} />
            </div>
          </div>
          {/* <div className="col-lg-4 tree3-data">
          <h4>ListView</h4>
          <div className="content">
            <div id="list">
              <ListViewComponent id="list" className="e-droppable" dataSource={[]} ref={(list) => { listObj = list; }} actionComplete={actionBegin.bind(this)} cssClass={'custom-list'} template="<div><span>${text}</span><span id=${iconId} class=${class}></span></div>" />
            </div>
          </div>
        </div> */}
        <div id="overlay">
        </div>
        </div>
      </div>
    </div>);
}
export default DragAndDrop;
