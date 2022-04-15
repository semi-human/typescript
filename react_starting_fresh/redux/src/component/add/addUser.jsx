import React from 'react'

const AddUser = () => {
  return (
    <div className='body-form'>
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
                    value='abc'
                    onChange={(e)=> e.target.value}
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
                    value='abc'
                    onChange={(e)=> e.target.value}
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
                    value='abc@yahoo.net'
                    onChange={(e)=> e.target.value}
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
                    value='https://reactjs.org/docs/forms.html'
                    onChange={(e)=> e.target.value}
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
                    value='def'
                    onChange={(e)=> e.target.value} 
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
                    value='def'
                    onChange={(e)=> e.target.value} 
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
                    value='bogtra'
                    onChange={(e)=> e.target.value} 
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
                    value='1234'
                    onChange={(e)=> e.target.value} 
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
                    value='123456'
                    onChange={(e)=> e.target.value} 
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
                        value='Radisops'
                        onChange={(e)=> e.target.value} 
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
                    value='abyss'
                    onChange={(e)=> e.target.value} 
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
                    value='abcder'
                    onChange={(e)=> e.target.value} 
                />
            </div>
        </div>

    </div>
  )
}

export default AddUser;