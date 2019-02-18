import React, { PureComponent } from 'react'
import Paper from './paper'
import { hoc1 } from './hoc1'
import { hoc2 } from './hoc2'

const Child = hoc1(hoc2(Paper))

const Parent = hoc1(hoc2(Paper))
class Hoc extends PureComponent {
  render() {
    return (
      <Parent className="Parent">
        <Child className="Child" height={100} width={100} bg={'blue'} />
      </Parent>
    )
  }
}
export default Hoc
