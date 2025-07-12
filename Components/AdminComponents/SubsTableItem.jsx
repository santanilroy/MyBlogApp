import React from "react";

const SubsTableItem = ({ email, mongoId, date, deleteEmail }) => {
  let emailDate = new Date();
  return (
    <>
      <tr className="bg-white border-b text-left">
        <th
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
          scope="row"
        >
          {email ? email : "No Email"}
        </th>
        <td className="px-6 py-4 hidden sm:block">
          {emailDate.toDateString()}
        </td>
        <td
          onClick={() => deleteEmail(mongoId)}
          className="px-6 py-4 cursor-pointer"
        >
          X
        </td>
      </tr>
    </>
  );
};

export default SubsTableItem;
