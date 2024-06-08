import { useState } from 'react'

const info = [

  { date: "2022-09-01", views: 100, article: "Article 1" },

  { date: "2023-09-01", views: 100, article: "Article 1" },

  { date: "2023-09-02", views: 150, article: "Article 2" },

  { date: "2023-09-02", views: 120, article: "Article 3" },

  { date: "2020-09-03", views: 200, article: "Article 4" }

]



function App() {
  const [data, setData] = useState(info);
  const sortByDate = () => {
    const s = data.length;
    const newArr = [...data];
    for (let i = 0; i < s - 1; i++) {
      for (let j = 0; j < s - i - 1; j++) {
        //if dates are same
        if (newArr[j].date === newArr[j + 1].date) {
          if (newArr[j].views < newArr[j + 1].views) {
            let temp = newArr[j];
            newArr[j] = newArr[j + 1];
            newArr[j + 1] = temp;
          }
        } else {
          const d1 = new Date(newArr[j].date);
          const d2 = new Date(newArr[j + 1].date);
          if (d1 < d2) {
            let temp = newArr[j];
            newArr[j] = newArr[j + 1];
            newArr[j + 1] = temp;
          }
        }
      }
    }
    setData(newArr);
  }
  const sortByViews = () => {

  }
  return <div>
    <h1>Date and Views Table</h1>
    <button onClick={sortByDate}>Sort by Date</button>
    <button onClick={sortByViews}>Sort by Views</button>
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Views</th>
          <th>Article</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((d, idx) =>
            <tr key={idx}>
              <td>{d.date}</td>
              <td>{d.views}</td>
              <td>{d.article}</td>
            </tr>
          )
        }
      </tbody>
    </table>
  </div>
}

export default App
