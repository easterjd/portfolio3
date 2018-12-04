import React, { Component } from 'react'
import Name from '../components'
import Aboutme from '../components'

import { Grid } from 'semantic-ui-react'

class Title extends Component {
    render () {
        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <Name/>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column width={8}>
                        <Aboutme/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}