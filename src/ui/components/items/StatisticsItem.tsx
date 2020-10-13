import {Image, Statistic} from "semantic-ui-react";
import React from "react";

interface StatisticsProps {
    value: string
    label: string
    image?: string
    isText?: boolean
}

export const StatisticsItem: React.FC<StatisticsProps> = (props) => {
    const {value, label, image, isText} = props

    const hasImage = () => {
        if (image) {
            return (<Image className='circular inline' src={image}/>)
        }
    }

    return (
        <Statistic>
            <Statistic.Value text={isText ?? false}>{hasImage()}{value}</Statistic.Value>
            <Statistic.Label>{label}</Statistic.Label>
        </Statistic>
    )
}