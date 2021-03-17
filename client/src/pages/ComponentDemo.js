import React from 'react'
import Button from '../components/Button'
import Card from '../components/Card'
import CardContainer from '../components/CardContainer'
import FormattedMessage from '../components/FormattedMessage'
import RegisterFormDemo from '../components/RegisterFormDemo'

const ComponentDemo = ()=>{
    return(
        <>
          <h1>My components</h1>
          <Card header='Buttons'>
            <Button primary>Primary button</Button>
            <Button >Inverted Button</Button>
          </Card>
          <Card header='Formatted Messages'>
              <FormattedMessage type='alert'>
                  Alert message
              </FormattedMessage>
              <FormattedMessage type='warn'>
                  Warn message
              </FormattedMessage>
              <FormattedMessage>
                  Notify message
              </FormattedMessage>
          </Card>
          <Card header='Form Demo'>
            <RegisterFormDemo />
         </Card>



         </>
    )
}

export default ComponentDemo