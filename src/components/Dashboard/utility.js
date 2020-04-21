import React from "react";

export const columns = [
  {
    title: "Country",
    dataIndex: "Country",
    key: "country",
    render: (country) => <a>{country}</a>,
    sorter: (a, b) => a.Country.length - b.Country.length,
    sortDirections: ["descend", "ascend"],
  },
  {
    title: "NewConfirmed",
    dataIndex: "NewConfirmed",
    key: "newConfirmed",
    sorter: (a, b) => a.NewConfirmed - b.NewConfirmed,
    sortDirections: ["descend", "ascend"],
  },
  {
    title: "TotalConfirmed",
    dataIndex: "TotalConfirmed",
    key: "totalConfirmed",
    sorter: (a, b) => a.TotalConfirmed - b.TotalConfirmed,
    sortDirections: ["descend", "ascend"],
  },
  {
    title: "NewDeaths",
    dataIndex: "NewDeaths",
    key: "newDeaths",
    sorter: (a, b) => a.NewDeaths - b.NewDeaths,
    sortDirections: ["descend", "ascend"],
  },
  {
    title: "TotalDeaths",
    dataIndex: "TotalDeaths",
    key: "totalDeaths",
    sorter: (a, b) => a.TotalDeaths - b.TotalDeaths,
    sortDirections: ["descend", "ascend"],
  },
  {
    title: "NewRecovered",
    dataIndex: "NewRecovered",
    key: "newRecovered",
    sorter: (a, b) => a.NewRecovered - b.NewRecovered,
    sortDirections: ["descend", "ascend"],
  },
  {
    title: "TotalRecovered",
    dataIndex: "TotalRecovered",
    key: "totalRecovered",
    sorter: (a, b) => a.TotalRecovered - b.TotalRecovered,
    sortDirections: ["descend", "ascend"],
  },
];

export const getSortedCountriesData = (data = []) =>
  data.sort((a, b) => b.TotalConfirmed - a.TotalConfirmed);
