import React from "react";
import { Favorites, mapStateToProps, mapDispatchToProps } from '../Favorites/Favorites'
import { shallow } from 'enzyme';


describe("Favorites", () => {
  describe("Favorites", () => {
    let wrapper;
  const mockUserFavorites = [
    { title: "Cars", poster_path: "car.jpg" },
    { title: "How To Train Your Dragon", poster_path: "dragon.jpg" }
  ];
  const mockUpdateUser = jest.fn();

  const mockUser = '1';
  const mockEmail = "abc@xyz.com"
  // const mockUser = 'tman'
  const mockId = '2'
  beforeEach(() => {
    wrapper = shallow(<Favorites favoriteMovies={mockUserFavorites}
                                 user={mockUser}
                                 email={mockEmail}
                                 updateUser={mockUpdateUser}
                                 id={mockId}/>)
  })

  it ('should match snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot()
  })
  })

  describe("mapStateToProps", () => {
    
    it('should return users favorite movies', () => {
      const mockState = {
        favoriteMovies: [{"name": "django"}, {"year": "2019"}],
        user: "1",
        email: "abc@xyz.com",
        user: "taylor"
      }

      const expected = {
        favoriteMovies: [{"name": "django"}, {"year": "2019"}],
        user: "1",
        email: "abc@xyz.com",
        user: "taylor"
        }
        const mappedProps = mapStateToProps(mockState)
        expect(mappedProps).toEqual(expected)
        
        
   

    })
  })
  
})
