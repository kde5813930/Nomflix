import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Section from "Components/Section";
import Loader from 'Components/Loader';
import Message from "Components/Message";
import Poster from "Components/Poster";


const Container = styled.div`
  padding: 20px;
`;


const TVPresenter = ({ topRated, popular, airingToday, error, loading}) => (
<>
  <Helmet>
    <title>TV | Nomflix</title>
  </Helmet>
  {
    loading ? ( 
    <Loader />
    ) : (
      <Container>
        {topRated && topRated.length > 0 && (
          <Section title="Top Rated Shows">
            {topRated.map(show => (
              <Poster 
                key={show.id} 
                id={show.id} 
                title={show.original_name} 
                imageUrl={show.poster_path}
                rating={show.vote_average}
                year={show.first_air_date.substring(0, 4)}
              />
            ))}
          </Section>
        )}
        {popular && popular.length > 0 && (
          <Section title="Popular Shows">
            {popular.map(show => (
              <Poster 
                key={show.id} 
                id={show.id} 
                title={show.original_name} 
                imageUrl={show.poster_path}
                rating={show.vote_average}
                year={show.first_air_date.substring(0, 4)}
              />
            ))}
          </Section>
        )}
        {airingToday && airingToday.length > 0 && (
          <Section title="Airing Today">
            {airingToday.map(show => (
              <Poster 
                key={show.id} 
                id={show.id} 
                title={show.original_name} 
                imageUrl={show.poster_path}
                rating={show.vote_average}
                year={show.first_air_date.substring(0, 4)}
              />
            ))}
          </Section>
        )}
        {error && <Message color="#e74c3c" text={error} />}
      </Container>)} 
  </>
);



TVPresenter.propTypes = {
  topRated: propTypes.array,
  popular: propTypes.array,
  airingToday: propTypes.array,
  error: propTypes.string,
  loading: propTypes.bool.isRequired,
}

export default TVPresenter;