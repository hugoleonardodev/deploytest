import React from 'react'
import { useSelector } from 'react-redux'
import { useRouteMatch } from 'react-router'
import { Button, Card, CardBody, CardGroup, CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap'

import { IRootStateWithReducers } from '@store/constants/_rootReducerTypes'

type TSharePatientPage = {
    patientId?: string
}

const SharePatientPage: React.FC<TSharePatientPage> = () => {
    const { results } = useSelector((state: IRootStateWithReducers) => state.patients)
    const { url } = useRouteMatch()
    const patientById = results.find(patient => patient.login.uuid === url.split('/')[2])
    if (patientById) {
        return (
            <CardGroup>
                <Card>
                    <CardImg alt={patientById.picture.large} src={patientById.picture.large} top width="100%" />
                    <CardBody>
                        <CardTitle tag="h5">{`${patientById.name.first} ${patientById.name.last}`}</CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                            {patientById.login.uuid}
                        </CardSubtitle>
                        <CardText>{patientById.email}</CardText>
                        <CardText>{patientById.phone}</CardText>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <CardTitle tag="h5">{patientById.gender}</CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                            {patientById.dob.date}
                        </CardSubtitle>
                        <CardText>{patientById.nat}</CardText>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <CardTitle tag="h5">{`${patientById.location.street.name}, ${patientById.location.street.number}`}</CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                            {`${patientById.location.city}, ${patientById.location.state} `}
                        </CardSubtitle>
                        <CardText>{patientById.location.postcode}</CardText>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <CardTitle tag="h5">Share this patient:</CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                            {`${__APP_BASE_URL__}/patient/${patientById.login.uuid}`}
                        </CardSubtitle>
                        <CardText>Copy to clipboard:</CardText>
                        <Button>Copy</Button>
                    </CardBody>
                </Card>
            </CardGroup>
        )
    }
    return <div>Patient not found</div>
}

export default SharePatientPage