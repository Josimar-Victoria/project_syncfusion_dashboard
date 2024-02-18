import React from "react";
import {
  GridComponent,
  Inject,
  ColumnsDirective,
  ColumnDirective,
  Search,
  Page,
  Toolbar,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  ExcelExport,
  Edit,
  PdfExport,
} from "@syncfusion/ej2-react-grids";

import { contextMenuItems, employeesGrid, projectsData, projectsGrid } from "../data/dummy";
import { Header } from "../components";

const Projects = () => {
  const toolbarOptions = ["Search"];

  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="" title="Projects" />
      <GridComponent
        dataSource={projectsData}
        width="auto"
        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
        pageSettings={{ pageCount: 5 }}
        contextMenuItems={contextMenuItems}
        editSettings={editing}
        toolbar={toolbarOptions}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {projectsGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Search, Page, Toolbar,Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
      </GridComponent>
    </div>
  );
};

export default Projects;
