import React from 'react';
import ReactDOM from 'react-dom';
import { App }  from './App';
import { shallow, mount } from 'enzyme';
import { fetchNowPlayingMovies } from './App';

describe('App', () => {
  let wrapper;
  const mockMovies = [
    {title: "Cars", poster_path: "car.jpg"},
    {title: "How To Train Your Dragon", poster_path: "dragon.jpg"}
  ]
    
  const mockNowPlayingMovies = jest.fn()
  const mockTopRatedMovies = jest.fn()
  const mockPopularMovies = jest.fn()
    // const mockFailedRequest = jest.fn().mockRejectedValue(new Error('I failed'));
  
  beforeEach(() => {
    wrapper = shallow(<App nowPlayingMovies={mockNowPlayingMovies} 
                           topratedMovies={mockTopRatedMovies} 
                           popularMovies={mockPopularMovies} 
                           />)
    jest.fn().mockImplementation(() => Promise.resolve({results: mockMovies}))
  })

  it('should match the snapshot with all data passed in', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should call all of my fetches when the component mounts', () => {
    wrapper.instance().fetchNowPlayingMovies = jest.fn()
    wrapper.instance().fetchTopRatedMovies = jest.fn()
    wrapper.instance().fetchPopularMovies = jest.fn()
    wrapper.instance().componentDidMount()
    expect(wrapper.instance().fetchNowPlayingMovies).toHaveBeenCalled()
    expect(wrapper.instance().fetchTopRatedMovies).toHaveBeenCalled()
    expect(wrapper.instance().fetchPopularMovies).toHaveBeenCalled()

  })

  it('should set an error state when the fetch fails', async () => {
    
  })
});
