import React from 'react'
import Button from '../components/Button'
import CardContainer from '../components/CardContainer'
import FormattedMessage from '../components/FormattedMessage'
import RegisterFormDemo from '../components/RegisterFormDemo'

const ComponentDemo = ()=>{
    return(
        <>
          <h1>My components</h1>
          <Button primary>Primary button</Button>
          <Button >Inverted Button</Button>
          <CardContainer>
              <FormattedMessage type='alert'>
                  Alert message
              </FormattedMessage>
              <FormattedMessage type='warn'>
                  Warn message
              </FormattedMessage>
              <FormattedMessage>
                  Notify message
              </FormattedMessage>
          </CardContainer>
          <CardContainer>
            <RegisterFormDemo />
         </CardContainer>
          <CardContainer>
              <h1>yo</h1>
              <p>asdhjfka dkfj alksdj flkaj sdlfkj a lk df</p>
              <p>asdhjfka dkfj alksdj flkaj sdlfkj a lk df</p>
          </CardContainer>
          <CardContainer>
              <h1>yo</h1>
              <p>asdhjfka dkfj alksdj flkaj sdlfkj a lk df</p>
              <p>asdhjfka dkfj alksdj flkaj sdlfkj a lk df</p>
          </CardContainer>


         </>
    )
}

export default ComponentDemo