import React from 'react'
import './FrontCover.scss'
import { css, cx } from 'emotion'

//
import HeroImage from '../../mock/pics/modern-building-against-sky-323780.jpg';
import Header from '../Header/Header';
import Page from '../Page/Page';

export default function FrontCover({theme}) {
    return (
        <Page className="frontCover" theme={theme}>
            <div className="desc">
                <div className="title">Luxuriöses Einfamilienhaus am SStrand von Wangerooge</div>
                <div className="data">Objekt: 16068 | Neusserkoppelstraße 29 a | 26486&nbsp;Wangerooge | 779.000,00 € </div>
            </div>
            <div className="pic" style={{
                backgroundImage: `url(${HeroImage})`
            }}></div>
        </Page>
    );
}