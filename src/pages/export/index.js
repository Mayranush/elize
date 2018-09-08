import React from 'react';
import {connect} from "react-redux";
import {generalActions, secondPageActions,} from "../../actions";
import {
  selectDataNoneCompare,
  selectDataNoneCompareProducts,
  selectDataCompareAttached
} from "../../selectors/secondPageSelectors";
import "./export.scss";


class About extends React.Component {
  constructor(props) {
    super(props);
  }

  exportData = (e) => {
    let host = "http://63.142.251.65:8888"
    let exportType = this.props.data.exportType;
    if (exportType === "Сопоставление Продукты") {
      window.open(host + "/compare-elize-export");
    } else if (exportType === "Прикрепление Продукты") {
      window.open(host + "/attached-elize-export");
    } else if (exportType === "Не Сопоставление Продукты - Elize") {
      window.open(host + "/non-compare-elize-export");
    } else if (exportType === "Не Сопоставление Продукты - Конкурент") {
      window.open(host + "/non-compare-products-export");
    }

  };

  handleChange(e) {
    this.props.exportType(e.target.value);
  }

  compareElize() {
    let percent = this.refs.percentage.value;
    console.log(percent);
     this.props.compareElizeStart(percent);
  }

  stopCompareElize() {
    this.props.stopCompareElize();
  }

  startElize() {
    this.props.startElize();
  }

  stopElize() {
    this.props.stopElize();
  }

  componentDidMount() {
    this.props.statusAll();
    this.props.statusMe();
  }

  render() {
    return (
      <div className="main-content">

        <form>
          <div className="form-group">
            <label htmlFor="sel1" className="select-title">Select export type:</label>
            <select className="form-control export" id="sel1" onChange={(e) => this.handleChange(e)}>
              <option> Сопоставление Продукты</option>
              <option> Прикрепление Продукты</option>
              <option> Не Сопоставление Продукты - Elize</option>
              <option> Не Сопоставление Продукты - Конкурент</option>
            </select>
            <button className="btn btn-primary export-to-excel" type="button"
                    onClick={(e) => this.exportData(e)}>Экспорт
            </button>
          </div>
        </form>

        <div className="status-all">


          <input className="percentage" id="percentage" type="text" ref="percentage" defaultValue="60"/>%
          <button className="btn btn-primary update" type="button"
                  onClick={() => this.compareElize()}>Сопоставить
          </button>
          <button className="btn btn-primary update" type="button"
                  onClick={() => this.stopCompareElize()}>Стоп
          </button>

          <button className="btn btn-primary update" type="button"
                  onClick={() => this.startElize()}>Парс
          </button>
          <button className="btn btn-primary update" type="button"
                  onClick={() => this.stopElize()}>Стоп
          </button>

          - {this.props.data.statusAll}
        </div>
        <table className="table">
          <thead className="thead-inverse">
          <tr>
            <th>Магазин</th>
            <th>Состояние</th>
            <th>Статус</th>
          </tr>
          </thead>
          <tbody>
          {
            this.props.data.statusData.map((item) => {
              return (<tr key={item.id}>
                <td title={item.id}>{item.id}</td>
                <td title={item.state}>{item.state}</td>
                <td title={item.status}>{item.status}</td>
              </tr>);
            })
          }
          </tbody>
        </table>

      </div>
    )
  }
}

export default connect(
  state => ({
    data: state.secondPage,
    // dataFilteredNoneCompare: selectDataNoneCompare(state),
    // dataFilteredNoneCompareProducts: selectDataNoneCompareProducts(state),
    // dataFilteredAttached: selectDataCompareAttached(state)
  }),
  {...secondPageActions}
)(About);