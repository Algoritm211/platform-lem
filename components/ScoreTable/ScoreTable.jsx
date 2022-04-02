import React from "react";
import { Table, Button } from "antd";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const dataSource = [
  {
    key: getRandomInt(9999999999),
    name: "Edward",
    totalScore: 2,
    lessons: [
      {
        title: "HTML tags",
        children: [
          {
            title: "Q1",
            key: "Q1",
            userScoreQ1HTMLtags: 1, // тут значение из userScore
            userScore: 1,
            maxScore: 1,
          },
          {
            title: "Q2",
            key: "Q2",
            userScoreQ1HTMLtags: 1, // тут значение из userScore
            userScore: 1,
            maxScore: 1,
          },
          {
            title: "Q3",
            key: "Q3",
            userScoreQ1HTMLtags: 0, // тут значение из userScore
            userScore: 0,
            maxScore: 1,
          },
        ],
      },
    ],
  },
  {
    key: getRandomInt(9999999999),
    name: "Alex",
    totalScore: 2,
    lessons: [
      {
        title: "HTML tags",
        children: [
          {
            title: "Q1",
            key: "Q1",
            dataIndex: "userScoreQ1HTMLtags",
            userScoreQ1HTMLtags: 1, // тут значение из userScore
            userScore: 0,
            maxScore: 1,
          },
          {
            title: "Q2",
            key: "Q2",
            userScoreQ1HTMLtags: 1, // тут значение из userScore
            userScore: 1,
            maxScore: 1,
          },
          {
            title: "Q3",
            key: "Q3",
            userScoreQ1HTMLtags: 1, // тут значение из userScore
            userScore: 1,
            maxScore: 1,
          },
        ],
      },
    ],
  },
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Score",
    dataIndex: "totalScore",
    key: "totalScore",
  },
  {
    title: "HTML tags",
    children: [
      {
        title: "Q1",
        dataIndex: ["lessons", "children", "userScore"],
        key: "Q1",
      },
      {
        title: "Q2",
        dataIndex: "userScoreQ2HTMLtags",
        key: "Q2",
      },
      {
        title: "Q3",
        dataIndex: "userScoreQ3HTMLtags",
        key: "Q3",
      },
    ],
  },
  {
    title: "React",
    children: [
      {
        title: "Q1",
        dataIndex: "userScoreQ1React",
        key: "Q1",
      },
      {
        title: "Q2",
        dataIndex: "userScoreQ2React",
        key: "Q2",
      },
    ],
  },
];

const dataSource2 = {
  columnsData: [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Score",
      dataIndex: "totalScore",
      key: "totalScore",
    },
    {
      title: "HTML tags",
      children: [
        {
          title: "Q1",
          dataIndex: "userScoreQ1HTMLtags",
          key: "Q1",
          //   render(text, record) {
          //     return {
          //       props: {
          //         style: { background: parseInt(text) > 0 ? "#b7eb8f" : null }
          //       },
          //       children: <div>{text}</div>
          //     };
          //   }
        },
        {
          title: "Q2",
          dataIndex: "userScoreQ2HTMLtags",
          key: "Q2",
        },
        {
          title: "Q3",
          dataIndex: "userScoreQ3HTMLtags",
          key: "Q3",
        },
      ],
    },
    {
      title: "React",
      children: [
        {
          title: "Q1",
          dataIndex: "userScoreQ1React",
          key: "Q1",
        },
        {
          title: "Q2",
          dataIndex: "userScoreQ2React",
          key: "Q2",
        },
      ],
    },
  ],
  tableData: [
    {
      key: getRandomInt(9999999999),
      name: "Edward",
      totalScore: 3,
      userScoreQ1HTMLtags: 1,
      userScoreQ2HTMLtags: 1,
      userScoreQ3HTMLtags: 0,
      userScoreQ2React: 0,
    },
    {
      key: getRandomInt(9999999999),
      name: "Alex",
      totalScore: 3,
      userScoreQ1HTMLtags: 1,
      userScoreQ2HTMLtags: 0,
      userScoreQ3HTMLtags: 0,
      userScoreQ1React: 1,
      userScoreQ2React: 1,
    },
  ],
};

const ScoreTable = () => {
  return (
    <div>
      <Table bordered columns={columns} dataSource={dataSource} />
    </div>
  );
};

export default ScoreTable;
