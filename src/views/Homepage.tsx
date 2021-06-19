import React, { useState, useEffect } from 'react';
import moment from 'moment';

import Scene from '../components/scene/Scene';
import Card from '../components/Card';
import SortingSwitcher from '../components/SortingSwitcher';
import Pagination from '../components/Pagination';
import { Container, CardContainer } from '../styled/homepage';
import useFetch from '../hooks/useFetch';
import { scheduleURL } from '../urls';

interface IState {
    episodes: {
        name: string;
        id: number;
        airstamp: string;
        show: {
            name: string;
            url: string;
            id: number;
            image: { original: string; medium: string };
            rating: { average: number };
        };
    }[];
}

const Homepage: React.FC = () => {
    const url = scheduleURL;
    const { data, status }: { data?: []; status: string } = useFetch(url);

    const [episodes, setEpisodes] = useState<IState['episodes']>([]);

    // api date set in state for easier handling
    useEffect(() => {
        if (data) {
            setEpisodes(data);
        }
    }, [data]);

    // sort handling
    const [sort, setSort] = useState('rating');

    // pagination handling
    const episodesPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastEpisode = currentPage * episodesPerPage;
    const indexOfFirstEpisode = indexOfLastEpisode - episodesPerPage;

    const renderepisodes = () => (
        <Container>
            <SortingSwitcher setActive={setSort} active={sort} setCurrentPage={setCurrentPage} />
            <CardContainer>
                {episodes
                    .sort((a, b) => {
                        if (sort === 'rating') {
                            return a.show.rating.average > b.show.rating.average ? -1 : 1;
                        }
                        return moment(a.airstamp).isBefore(b.airstamp) ? -1 : 1;
                    })
                    .slice(indexOfFirstEpisode, indexOfLastEpisode)
                    .map((show) => (
                        <Card
                            key={show.id}
                            episode={show.name}
                            id={show.show.id}
                            name={show.show.name}
                            image={show.show.image}
                            rating={show.show.rating.average}
                        />
                    ))}
            </CardContainer>
            <Pagination
                totalEpisodes={episodes.length}
                episodesPerPage={episodesPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </Container>
    );

    return (
        <>
            {status === 'fetched' ? (
                <>
                    <Scene />
                    {renderepisodes()}
                </>
            ) : (
                'loading...'
            )}
        </>
    );
};
export default Homepage;
