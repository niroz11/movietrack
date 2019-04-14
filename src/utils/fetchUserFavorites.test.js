import  { fetchUserFavorites }  from '../utils/fetchUserFavorites';

describe('fetchUserFavorites', () => {
  let mockData;

  beforeEach(() => {
    mockData = [
      { title: "Cars", poster_path: "car.jpg" },
      { title: "How To Train Your Dragon", poster_path: "dragon.jpg" }
    ]

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      status: 200,
      json: () => Promise.resolve(mockData),
    }));
  })

  it ('should use fetchUserFavorites to call fetch', async () => {
    await fetchUserFavorites()
    expect(window.fetch).toHaveBeenCalled()
  })

  it('should give us error if fetch fails', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      status: 200,
      json: () => Promise.resolve(mockData),
    }));
    
  })

  
})