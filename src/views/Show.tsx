/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
/* eslint-disable react/no-danger */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import BeautyStars from 'beauty-stars';

import {
    ShowContainer,
    TopContainer,
    ShowImage,
    TopContentContainer,
    Content,
    ContentColumn,
    Item,
    ItemValue,
} from '../styled/show';
import useFetch from '../hooks/useFetch';
import { showsURL } from '../urls';
import { dark } from '../colors';

interface IState {
    state: {
        id: number;
        runtime: number
        name: string;
        summary: string;
        status: string;
        type: string,
        language: string,
        premiered: string,
        officialSite: string,
        genres: string[];
        rating: { average: number };
        image: { medium: string };
        network: { name: string };
        schedule: { days: string[] };
    };
    showState: any;
}

const Show: React.FC = () => {
    const location = useLocation<IState['state']>();

    const url = `${showsURL}/${location.state.id}`;
    const { data }: { data?: any; status: string } = useFetch(url);

    const [show, setShow] = useState<IState['state']>();

    useEffect(() => {
        if (data) {
            setShow(data);
        }
    }, [data]);

    return (
        <>
            {show ? (
                <ShowContainer>
                    <TopContainer>
                        <a href={`${show.officialSite}`} target="blank">
                            <ShowImage imgURL={show.image?.medium} /></a>
                        <TopContentContainer>
                            <BeautyStars
                                value={show.rating.average}
                                maxStars={10}
                                editable={false}
                                size="12px"
                                gap="2px"
                                activeColor={dark.grayDark}
                                inactiveColor={dark.light}
                            />
                            <a href={`${show.officialSite}`} target="blank" style={{ color: 'white', marginTop: 16 }}>
                                <h1>{show.name}</h1>
                            </a>
                            <div
                                dangerouslySetInnerHTML={{ __html: show.summary }}
                                style={{ fontSize: 18 }}
                            />
                        </TopContentContainer>
                    </TopContainer>
                    <Content>
                        <ContentColumn>
                            <Item>
                                Streamed on: <ItemValue>{show.network?.name}</ItemValue>
                            </Item>
                            <Item>
                                Schedule:
                                {show.schedule.days.map((day) => (
                                <ItemValue key={day}>{day}</ItemValue>
                            ))}
                            </Item>
                            <Item>
                                Status: <ItemValue>{show.status}</ItemValue>
                            </Item>
                            <Item>
                                Genres:
                                {show.genres.map((genre) => (
                                <ItemValue key={genre}>{genre}</ItemValue>
                            ))}
                            </Item>
                        </ContentColumn>
                        <ContentColumn>
                            <Item>
                                Type: <ItemValue>{show.type}</ItemValue>
                            </Item>
                            <Item>
                                Runime: <ItemValue>{show.runtime}min</ItemValue>
                            </Item>
                            <Item>
                                Language: <ItemValue>{show.language}</ItemValue>
                            </Item>
                            <Item>
                                Premiered: <ItemValue>{show.premiered}</ItemValue>

                            </Item>
                        </ContentColumn>
                    </Content>
                </ShowContainer>
            ) : (
                'loading...'
            )}
        </>
    );
};
export default Show;
