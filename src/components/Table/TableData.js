
const data = [
  { id: 1, name: "Nancy", surname: "Kansal", birthYear: 2002 },
  { id: 2, name: "Payal", surname: "Kansal", birthYear: 2004 },
  { id: 3, name: "Komal", surname: "Godara", birthYear: 2002 },
  { id: 4, name: "Mehak", surname: "Gupta", birthYear: 2004 },
];

const columns = [
  {
    title: "Name",
    field: "name",
    type: "text",
    cellStyle: {
      color: "#00008B",
    },
    render: (data, type = "column") => {
      // console.log("🚀 ~ data:", data)
      return <a href="/profile"><div>{data["name"]}</div></a>
    }
  },
  { title: "Surname", field: "surname", type: "text" },
  { title: "Birth Year", field: "birthYear", type: "numeric" },
];

export { data, columns };
 