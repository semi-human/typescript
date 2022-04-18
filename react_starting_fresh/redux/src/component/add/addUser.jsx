import React,{useState , useEffect} from 'react'

let userId;

const AddUser = () => {
    const [name,setName] = useState('');
    const [username,setUserName] = useState('');
    const [email,setEmail] = useState('');
    const [web,setWeb] = useState('');
    const [street,setStreet] = useState('');
    const [suite,setSuite] = useState('');
    const [city,setCity] = useState('');
    const [zip,setZip] = useState('');
    const [contact,setContact] = useState('');
    const [company,setCompany] = useState('');
    const [catchPhrase,setCatchPhrase] = useState('');
    const [bs,setBs] = useState('');
    const [file ,setFile] =useState(null);

    const [newUsers,setNewUsers] = useState([]);
    useEffect(() => {
        const userList = JSON.parse(localStorage.getItem('newUsers'));
        if(userList !== null && Object.keys(userList).length > 0)
        {
            setNewUsers(userList);
        }
        userId= localStorage.getItem('id') !== null ? Number(localStorage.getItem('id')) : 11;
    }, [])
     
   
    const handleSubmit =  (e) =>{
        let found = false;
        e.preventDefault();
        console.log(file,userId,name,username,email,web,street,suite,city,zip,contact,company,catchPhrase,bs);
        const newUser = {
            id:userId,
            name:name,
            username:username,
            email:email,
            address:{
                street:street,
                suite:suite,
                city:city,
                zipcode:zip
            },
            imgfile: file,
            website:web,
            
            phone:contact,
            company:{
                name:company,
                catchPhrase:catchPhrase,
                bs:bs
            }
        }
        console.log(typeof(newUsers));
        console.log(file);
        newUsers.some(user=> user.email === newUser.email ?  found = true : '');
        if(found)
        {
            alert('same information added');
        }
        else{
            newUsers.push(newUser);    
            localStorage.setItem('newUsers' , JSON.stringify(newUsers));
            console.log(userId);
            localStorage.setItem('id',userId + 1);
        }
    }
    const getBase64 = (file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result);
          reader.onerror = (error) => reject(error);
          reader.readAsDataURL(file);
        });
      };
      
    const imageUpload = (e) => {
        const file = e.target.files[0];
        getBase64(file).then((base64) => {
          console.log(base64);
          setFile(base64);
        });
    };
    console.log(file);
    return (
    <div className='body-form'>
     <form className='user-form' onSubmit={handleSubmit}>
     <div className="basic-info">
            <h2>Basic Information</h2>
            <div className="blocks">
                <label htmlFor="name">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    className='name'
                    value={name}
                    required
                    placeholder="Enter full name"
                    onChange={(e)=> setName(e.target.value)}
                />
            </div>
            <div className="blocks">
                <label htmlFor="username">
                    User Name
                </label>
                <input
                    type="text"
                    id="username"
                    className='username'
                    value={username}
                    required
                    placeholder="Enter user name"
                    onChange={(e)=> setUserName(e.target.value)}
                />
            </div>
            <div className="blocks">
                <label htmlFor="userimage">
                    User Name
                </label>
                <input
                    type="file"
                    id="userimage"
                    className='userimage'
                    required
                    onChange={(e)=> imageUpload(e)}
                />
            </div>
            <div className="blocks">
                <label htmlFor="email">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    className='email'
                    value={email}
                    required
                    placeholder='Enter email'
                    onChange={(e)=> setEmail(e.target.value)}
                />
            </div>
            <div className="blocks">
                <label htmlFor="web">
                    Website
                </label>
                <input
                    type="text"
                    id="web"
                    className='web'
                    value={web}
                    placeholder="Enter your website"
                    onChange={(e)=> setWeb(e.target.value)}
                />
            </div>
        </div>
        <h2>Address Information</h2>
        <div className="address-info">
            <div className="blocks">
                <label htmlFor="street">
                    Street
                </label>
                <input 
                    type="text"
                    id="street"
                    className='street'
                    value={street}
                    required
                    placeholder="Enter street number"
                    onChange={(e)=> setStreet(e.target.value)} 
                />
            </div>

            <div className="blocks">
                <label htmlFor="suite">
                    Suite
                </label>
                <input 
                    type="text"
                    id="suite"
                    className='suite'
                    value={suite}
                    required
                    placeholder='Enter suite number'
                    onChange={(e)=> setSuite(e.target.value)} 
                />
            </div>

            <div className="blocks">
                <label htmlFor="city">
                    City
                </label>
                <input 
                    type="text"
                    id="city"
                    className='city'
                    value={city}
                    required
                    placeholder="Enter city"
                    onChange={(e)=> setCity(e.target.value)} 
                />
            </div>

            <div className="blocks">
                <label htmlFor="zip">
                    ZipCode
                </label>
                <input 
                    type="text"
                    id="zip"
                    className='zip'
                    value={zip}
                    required
                    placeholder='Enter zip code of your area'
                    onChange={(e)=> setZip(e.target.value)} 
                />
            </div>

            <div className="blocks">
                <label htmlFor="phone">
                    Contact No.
                </label>
                <input 
                    type="text"
                    id="phone"
                    className='phone'
                    value={contact}
                    required
                    placeholder='Enter your contact'
                    onChange={(e)=> setContact(e.target.value)} 
                />
            </div>
        </div>

        <h2>Company Information</h2>
        <div className="company-info">
            <div className="blocks">
                    <label htmlFor="company-name">
                        Comapny Name
                    </label>
                    <input 
                        type="text"
                        id="company-name"
                        className='company-name'
                        value={company}
                        required
                        placeholder='Enter your company or educational institute name'
                        onChange={(e)=> setCompany(e.target.value)} 
                    />
            </div>
            
            <div className="blocks">
                <label htmlFor="catch">
                    Catch Phrase
                </label>
                <input 
                    type="text"
                    id="catch"
                    className='catch'
                    value={catchPhrase}
                    required
                    placeholder='Enter your orgnization ethics'
                    onChange={(e)=> setCatchPhrase(e.target.value)} 
                />
            </div>

            <div className="blocks">
                <label htmlFor="bs">
                    Bs
                </label>
                <input 
                    type="text"
                    id="bs"
                    className='bs'
                    value={bs}
                    required
                    placeholder='Enter your organization motto'
                    onChange={(e)=> setBs(e.target.value)} 
                />
            </div>
        </div>
        <input type="submit" value="Add User" name="submit" className='submit-btn-user'/>    
     </form>
    </div>
  )
}

export default AddUser;