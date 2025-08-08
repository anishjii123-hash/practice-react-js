 const student = [
  {
    "name": "Aarav Mehta",
    "age": 28,
    "date_of_birth": "1997-03-14",
    "place": "Mumbai",
    "photo": "https://example.com/photos/aarav.jpg"
  },
  {
    "name": "Saanvi Sharma",
    "age": 25,
    "date_of_birth": "1999-01-22",
    "place": "Delhi",
    "photo": "https://example.com/photos/saanvi.jpg"
  },
  {
    "name": "Rohan Verma",
    "age": 31,
    "date_of_birth": "1993-07-05",
    "place": "Bangalore",
    "photo": "https://example.com/photos/rohan.jpg"
  },
  {
    "name": "Isha Kapoor",
    "age": 27,
    "date_of_birth": "1997-10-11",
    "place": "Chandigarh",
    "photo": "https://example.com/photos/isha.jpg"
  },
  {
    "name": "Kabir Singh",
    "age": 30,
    "date_of_birth": "1994-02-03",
    "place": "Hyderabad",
    "photo": "https://example.com/photos/kabir.jpg"
  },
  {
    "name": "Priya Das",
    "age": 26,
    "date_of_birth": "1998-09-19",
    "place": "Kolkata",
    "photo": "https://example.com/photos/priya.jpg"
  },
  {
    "name": "Aditya Joshi",
    "age": 29,
    "date_of_birth": "1995-04-28",
    "place": "Pune",
    "photo": "https://example.com/photos/aditya.jpg"
  },
  {
    "name": "Neha Nair",
    "age": 32,
    "date_of_birth": "1992-08-15",
    "place": "Kochi",
    "photo": "https://example.com/photos/neha.jpg"
  },
  {
    "name": "Vikram Reddy",
    "age": 24,
    "date_of_birth": "2000-06-02",
    "place": "Visakhapatnam",
    "photo": "https://example.com/photos/vikram.jpg"
  },
  {
    "name": "Tanvi Kulkarni",
    "age": 27,
    "date_of_birth": "1997-12-09",
    "place": "Nagpur",
    "photo": "https://example.com/photos/tanvi.jpg"
  }
]
 export const setlocalStorage=()=>{
    localStorage.setItem('student',JSON.stringify(student))
}
 export const getlocalStorage=()=>{
   const data = localStorage.getItem('student',JSON.stringify(student))
   console.log(JSON.parse(data))
}