import MaterialTable from "material-table";
import {
  DownloadOutlined
} from '@ant-design/icons';
import React from "react";

function TableComp(props) {
  return (
    <div className="table" style={{marginTop:"4%"}}>
      <MaterialTable
        options={{
          toolbar: false,
          paging: false,
          search: false,
          headerStyle: {
            backgroundColor: "#002140",
            color: "#FFFFFF",
            fontWeight: "bold",
          },
          showTitle: false,
          actionsColumnIndex: 4,
          draggable: false,
        }}
        localization={{ header: { actions: "Report" } }}
        actions={[
          (rowData) => ({
            icon: DownloadOutlined,
            tooltip: "Download Report",
            onClick: (event, rowData) =>
              alert(`${rowData.type} Report Downloaded`),
            disabled: rowData.status !== "S" && rowData.status !== "SRF",
          }),
        ]}
        columns={[
          { title: "S.No.", field: "serial" },
          { title: "Type", field: "type", sorting: false },
          { title: "Category/Status", field: "status", sorting: false },
          { title: "Date", field: "date", type: "date", sorting: false },
        ]}
        data={props.progData}
        title="Demo Title"
      />
    </div>
  );
}

export default TableComp;
