import "./totalsale.css";
import TotalsaleGraph from "./TotalsaleGraph";

function TotalSale() {
  return (
    <div>
      <h5 style={{fontSize:"16px",textAlign:"left",marginLeft:"35px"}}>Sales detail</h5>
      <div className="total-sale">
        <div>
          <h3>Total Sales Overview</h3>

          <p>7 - 13 Aug, 2020</p>
        </div>
        <div>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.3392 0.660806L13.6565 2.34355C12.2089 0.89571 10.2092 0 8 0C3.71703 0 0.220129 3.36574 0.01 7.59655C-0.00093547 7.81648 0.176613 8 0.396806 8H1.30148C1.50642 8 1.6761 7.84026 1.68771 7.63568C1.87616 4.31126 4.62752 1.67742 8 1.67742C9.74719 1.67742 11.3276 2.38461 12.4714 3.52858L10.7254 5.27468C10.4815 5.51855 10.6542 5.93548 10.9991 5.93548H15.6129C15.8267 5.93548 16 5.76216 16 5.54839V0.934548C16 0.589677 15.583 0.416968 15.3392 0.660806ZM15.6032 8H14.6985C14.4936 8 14.3239 8.15974 14.3123 8.36432C14.1238 11.6887 11.3725 14.3226 8 14.3226C6.25281 14.3226 4.67235 13.6154 3.52858 12.4714L5.27465 10.7253C5.51852 10.4815 5.34581 10.0645 5.00094 10.0645H0.387097C0.173323 10.0645 0 10.2378 0 10.4516V15.0655C0 15.4103 0.416968 15.583 0.660806 15.3392L2.34355 13.6565C3.79113 15.1043 5.79084 16 8 16C12.283 16 15.7799 12.6343 15.99 8.40345C16.0009 8.18352 15.8234 8 15.6032 8Z"
              fill="#485572"
            />
          </svg>

          <p>Refresh Metrics</p>
          <p>Filter by</p>
          <b>This week</b>
          <svg
            width="13"
            height="7"
            viewBox="0 0 13 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 1L6.5 6L11.5 1"
              stroke="#262730"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>

      <div className="last-week">
        <div>
          <div>
            <h1>$74,729.00</h1>
            <p
              style={{
                color: "#2FCA72",
                fontWeight: "700",
                fontSize: "16px;",
                LineHeight: "0px",
                textAlign: "left",
              }}
            >
              <svg
                style={{ marginRight: "10px" }}
                width="20"
                height="12"
                viewBox="0 0 20 12"
                fill="#2FCA72"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 0L16.295 2.295L11.415 7.16999L7.41501 3.17001L0 10.585L1.41501 12L7.41501 5.99999L11.415 10L17.705 3.705L20 5.99999V0H14Z"
                  fill="#2FCA72"
                />
              </svg>
              +21% from last week
            </p>
          </div>
          <p style={{ marginTop: "20px", marginRight: "30px" }}>
            <svg
              width="16"
              style={{ marginRight: "15px" }}
              height="12"
              viewBox="0 0 16 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.67656 6.67656C3.87188 6.87187 4.18844 6.87187 4.38375 6.67656L6 5.06063L8.64656 7.70719C8.84188 7.9025 9.15844 7.9025 9.35375 7.70719L12.7981 4.2625L13.7197 5.18437C14.1922 5.65687 15 5.32219 15 4.65406V1.5C15 1.22375 14.7762 1 14.5 1H11.3459C10.6778 1 10.3431 1.80781 10.8156 2.28031L11.7375 3.20188L9 5.93937L6.35344 3.29281C6.15812 3.0975 5.84156 3.0975 5.64625 3.29281L3.32312 5.61594C3.12781 5.81125 3.12781 6.12781 3.32312 6.32312L3.67656 6.67656ZM15.5 10.5H1.5V0.5C1.5 0.22375 1.27625 0 1 0H0.5C0.22375 0 0 0.22375 0 0.5V11C0 11.5522 0.447812 12 1 12H15.5C15.7762 12 16 11.7762 16 11.5V11C16 10.7238 15.7762 10.5 15.5 10.5Z"
                fill="#2FCA72"
              />
            </svg>
            Highest revenue since 2 weeks ago
          </p>
        </div>

        <div>
          <div className="total-profit">
            <p >Total Profit</p>
            <h2>$12,545.00</h2>
            <p
              style={{
                color: "#2FCA72",
                fontWeight: "700",
                fontSize: "16px;",
                LineHeight: "0px",
                textAlign: "left",
              }}
            >
              <svg
                style={{ marginRight: "10px" }}
                width="20"
                height="12"
                viewBox="0 0 20 12"
                fill="#2FCA72"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 0L16.295 2.295L11.415 7.16999L7.41501 3.17001L0 10.585L1.41501 12L7.41501 5.99999L11.415 10L17.705 3.705L20 5.99999V0H14Z"
                  fill="#2FCA72"
                />
              </svg>
              +23% from last week
            </p>
          </div>
        </div>
      </div>
      <div className="total-week">
        <div style={{width: '100%', paddingRight: '30px'}}>
          <TotalsaleGraph />
        </div>
        <div>
           <p>Total Products Sold</p>
           <h3>329</h3>
        </div>
      </div>
      
    </div>
  );
}

export default TotalSale;
