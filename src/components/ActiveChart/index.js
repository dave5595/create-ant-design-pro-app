import React, { Component } from 'react'
import { NumberInfo, Charts } from 'ant-design-pro'

import styles from './index.less'

const {MiniArea} = Charts

function fixedZero (val) {
  return val * 1 < 10 ? `0${val}` : val
}

function getActiveData () {
  let activeData = []
  for (let i = 0; i < 24; i += 1) {
    activeData.push({
      x: `${fixedZero(i)}:00`,
      y: Math.floor(Math.random() * 200) + i * 50,
    })
  }
  return activeData
}

class ActiveChart extends Component {
  constructor (props) {
    super(props)
    this.state = {
      activeData: getActiveData(),
    }
  }

  componentDidMount () {
    this.timer = setInterval(() => {
      this.setState({activeData: getActiveData()})
    }, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    let {activeData = []} = this.state
    return (
      <div className={styles.activeChart}>
        <NumberInfo subTitle="目标评估" total="有望达到预期"/>
        <div style={{marginTop: 32}}>
          <MiniArea
            animate={false}
            line
            borderWidth={2}
            height={84}
            scale={{
              y: {
                tickCount: 3,
              },
            }}
            yAxis={{
              tickLine: false,
              label: false,
              title: false,
              line: false,
            }}
            data={activeData}
          />
        </div>
        {
          activeData && (
            <div className={styles.activeChartGrid}>
              <p>{[...activeData].sort()[activeData.length - 1].y + 200} 亿元</p>
              <p>{[...activeData].sort()[Math.floor(
                activeData.length / 2)].y} 亿元</p>
            </div>
          )
        }
        {
          activeData && (
            <div className={styles.activeChartLegend}>
              <span>00:00</span>
              <span>{activeData[Math.floor(activeData.length / 2)].x}</span>
              <span>{activeData[activeData.length - 1].x}</span>
            </div>
          )
        }
      </div>
    )
  }
}

export default ActiveChart
