
import css from "./TransactionHistory.module.css";
export default function TransactionHistory({ items }) { 
    return (
<table className={css.container}>
    <thead className={css.head}>
      <tr>
        <th className={css.text}>Type</th>
        <th className={css.text}>Amount</th>
        <th className={css.text}>Currency</th>
      </tr>
    </thead>

        <tbody className={css.bodyTab}>
      {items.map(item => (
        <tr key={item.id}>
          <td className={css.text}>{item.type}</td>
          <td className={css.text}>{item.amount}</td>
          <td className={css.text}>{item.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
    )
}