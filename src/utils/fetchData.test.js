import { fetchData } from './fetchData';

describe('fetchData', () => {
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

  });

  it("fetch call takes expected url", () => {
    const url = 'www.moviedb.com'
    fetch(url);
    expect(fetch).toHaveBeenCalledWith(url);
  });

  it("fetch call returns expected data", async () => {
    const url = 'www.moviedb.com'
    const result = await fetchData(url)
    expect(result).toEqual(mockData);
  });

  it("if response not ok show error", async () => {
    const url = 'www.moviedb.com';
    const expectedError = new Error('error fetching data')

    window.fetch = jest.fn().mockImplementationOnce(() => Promise.resolve({
      ok: false,
      statusText: 'error fetching data'
    }));

    await expect(fetchData(url)).rejects.toEqual(expectedError);
  });
})