import MaterialTable from "material-table";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import React from "react";
import { blue } from "@material-ui/core/colors";

function TableComp(props) {
  return (
    <div className="table" style={{ float:"left", marginLeft:"20%", width:"60%", marginTop:"5%"}}>
      <MaterialTable
        options={{
          toolbar: false,
          paging: false,
          search: false,
          headerStyle: {
            backgroundColor: "#0000FF",
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
            icon: FileDownloadIcon,
            tooltip: "Download Report",
            onClick: (event, rowData) =>
              alert(`${rowData.type} Report Downloaded`),
            disabled: rowData.status != "S" && rowData.status != "SRF",
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
