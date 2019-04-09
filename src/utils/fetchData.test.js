describe('fetchData', () => {
    let mockData;
  
    beforeEach(() => {
      mockData = [
        { title: "Cars", poster_path: "car.jpg" },
        { title: "How To Train Your Dragon", poster_path: "dragon.jpg" }
      ]
  
      fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve(mockData),
      }));
  
    });
  
    it("fetch call takes expected url", () => {
      // setup
      const url = 'www.starwars.com'
      // execution
      fetchAnything(url);
      // expectation
      expect(fetch).toHaveBeenCalledWith(url);
    });
  
    it("fetch call returns expected data", async () => {
      // setup
      const url = 'www.starwars.com'
      // execution
      const result = await fetchAnything(url)
      expect(result).toEqual(mockData);
    });
  
    it("if response not ok show error", async () => {
      // setup
      const url = 'www.starwars.com';
  
      fetch = jest.fn().mockImplementationOnce(() => Promise.resolve({
        ok: false
      }));
  
      try {
        // execution
        await fetchAnything(url)
        
      } catch (error) {
        // expectations
        expect(error.message).toBe('Response not ok')
      }
    });
  
  })