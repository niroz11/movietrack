import React from 'react';
import { App } from './App';
import { shallow, mount } from 'enzyme';
import { fetchNowPlayingMovies } from './App';

describe('App', () => {
  let wrapper;
  const mockMovies = [
    { title: "Cars", poster_path: "car.jpg" },
    { title: "How To Train Your Dragon", poster_path: "dragon.jpg" }
  ]

  const mockNowPlayingMovies = jest.fn()
  const mockTopRatedMovies = jest.fn()
  const mockPopularMovies = jest.fn()
  // const mockFailedRequest = jest.fn().mockRejectedValue(new Error('I failed'));

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        results: mockMovies
      })
    }))

    wrapper = shallow(<App nowPlayingMovies={mockNowPlayingMovies}
      topRatedMovies={mockTopRatedMovies}
      popularMovies={mockPopularMovies}
      user={{ id: 1, name: "taylor" }}
    />)

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
  it('should use fetchNowPlayingMovies to call fetch', async () => {
    expect(window.fetch).toHaveBeenCalled()
  })


  it('should dispatch nowPlayingMovies with mock movies', async () => {
    await wrapper.instance().fetchNowPlayingMovies()
    expect(mockNowPlayingMovies).toHaveBeenCalledWith(mockMovies)


  })
  it('should set an error state when the fetch fails', async () => {
    // First, I want to reassign window.fetch to reject so that I have an error
    // Next, I want to make sure that fetch gets called with this new definition so that I have an error
    // Finally, I want to expect that my component's error state is equal to the error message

    window.fetch = jest.fn().mockImplementationOnce(() => Promise.reject(
      new Error('failed')
    ))
    await wrapper.instance().fetchNowPlayingMovies()
    expect(wrapper.state("error")).toEqual("failed")
  })

  it('should use fetchTopRatedMovies to call fetch', () => {
    expect(window.fetch).toHaveBeenCalled()
  })

  it('should dispatch topRatedMovies with mock movies', async () => {
    await wrapper.instance().fetchTopRatedMovies()
    expect(mockTopRatedMovies).toHaveBeenCalled()
  })

  it('should set an error state when fetch fails', async () => {
    window.fetch = jest.fn().mockImplementationOnce(() => Promise.reject(
      new Error('failed')
    ))

    await wrapper.instance().fetchTopRatedMovies()
    expect(wrapper.state("error")).toEqual("failed")
  })

  it('should use fetchPopularMovies to call fetch ', () => {
    expect(window.fetch).toHaveBeenCalled()
  })

  it('should dispatch popularMovies with mock movies', async () => {
    await wrapper.instance().fetchPopularMovies()
    expect(mockPopularMovies).toHaveBeenCalledWith(mockMovies)
  })
  it('should set an error state if fetching fails', async () => {
    window.fetch = jest.fn().mockImplementationOnce(() => Promise.reject(
      new Error('failed')
    ))
    await wrapper.instance().fetchPopularMovies()
    expect(wrapper.state("error")).toEqual("failed")

  })

  
});
