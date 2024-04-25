import useStyles from "./styles";
import React, { useState } from "react";
import tableIcons from "./MaterialIcons";
import { TOOLTIP } from "../../constants";
import MaterialTable from "material-table";

const MuiTable = ({ title, data, columns, setTableData, style, options }) => {
  const classes = useStyles();
  const [selectedRows, setSelectedRows] = useState([]);

  const handleRowClick = (event, rowData) => {
    const selectedIndex = selectedRows.indexOf(rowData.tableData.id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selectedRows, rowData.tableData.id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selectedRows.slice(1));
    } else if (selectedIndex === selectedRows.length - 1) {
      newSelected = newSelected.concat(selectedRows.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selectedRows.slice(0, selectedIndex),
        selectedRows.slice(selectedIndex + 1)
      );
    }

    setSelectedRows(newSelected);
  };

  const handleDeleteRows = (event, selectedRows) => {
    const selectedIds = selectedRows.map((row) => row.id);
    const updatedData = data.filter((row) => !selectedIds.includes(row.id));
    setTableData(updatedData);
  };
  return (
    <>
      <MaterialTable
        className={classes.table}
        title={title}
        actions={[
          {
            icon: tableIcons.Delete,
            tooltip: TOOLTIP.DELETE_USER,
            onClick: handleDeleteRows,
          },
          {
            icon: tableIcons.Add,
            tooltip: TOOLTIP.ADD_USER,
            isFreeAction: true,
          },
        ]}
        icons={tableIcons}
        columns={columns}
        onRowClick={handleRowClick}
        data={data}
        options={options}
        style={style}
      />
    </>
  );
};

export default MuiTable;