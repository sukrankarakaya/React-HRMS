import { Dropdown, DropdownItem, Label } from 'semantic-ui-react'

import { NavLink } from "react-router-dom";
import React from 'react'

import { Image, Menu } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import { userLogout } from 'store/actions/userActions';
import DropdownMenu from 'react-overlays/esm/DropdownMenu';


export default function SigneIn({ signOut }) {


    const { authItems } = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const history = useHistory();


    const handleLogout = (user) => {
        dispatch(userLogout(user))
        history.push("/")
    }



    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK6uAwJ2JNN2hrgWi18n2nGk5iJ9yF7N7ghg&usqp=CAU" />

                <Dropdown pointing="top left" text={authItems[0].user.name}>

                    <Dropdown.Menu >

                        {
                            authItems[0].user.userType == 1 && <Dropdown.Item as={NavLink}
                                to={`/candidateProfile/${authItems[0].user.id}`} text="Profil" icon="info" />
                        }
                        {authItems[0].user.userType == 1 && <Dropdown.Item as={NavLink}
                            to={`/favorite/${authItems[0].user.id}`} text="Favorileriniz" icon="heart" />
                        }
                        {authItems[0].user.userType == 1 && <Dropdown.Item text="Ayarlar" icon="cog" />

                        }
                        {authItems[0].user.userType == 1 && <Dropdown.Item onClick={() => handleLogout(authItems[0].user)} text="Çıkış Yap" icon="sign-out" />

                        }


                        {authItems[0].user.userType == 2 && <Dropdown.Item as={NavLink}
                            to={`/employerProfil/${authItems[0].user.id}`} text="Profil" icon="info" />
                        }
                        {authItems[0].user.userType == 2 && <Dropdown.Item as={NavLink}
                            to={`/JobAdvertisementadd`} text="İlan Ekle" icon="add circle" />
                        }
                        {authItems[0].user.userType == 2 && <Dropdown.Item as={NavLink}
                            to={`/employerJob/${authItems[0].user.id}`} text="İlanlarım" icon="align center" />
                        }
                        {authItems[0].user.userType == 2 && <Dropdown.Item text="Ayarlar" icon="cog" />

                        }
                        {authItems[0].user.userType == 2 && <Dropdown.Item onClick={() => handleLogout(authItems[0].user)} text="Çıkış Yap" icon="sign-out" />

                        }



                        {authItems[0].user.userType == 3 && <Dropdown.Item as={NavLink}
                            to={`/JobAdvertisementFalse`} text="Onay Bekleyen İlanlar." icon="info"  
                           />

                        } {authItems[0].user.userType==3 && <Label color='blue' size="mini" floating circular>
                        1
                    </Label>}

                        {authItems[0].user.userType == 3 && <Dropdown.Item as={NavLink}
                            to={`/employerList`} text="İş Verenler" icon="add circle" />
                        }
                        {authItems[0].user.userType == 3 && <Dropdown.Item as={NavLink}
                            to={`/candidate`} text="Adaylar" icon="align center" />
                        }
                        {authItems[0].user.userType == 3 && <Dropdown.Item text="Ayarlar" icon="cog" />

                        }
                        {authItems[0].user.userType == 3 && <Dropdown.Item onClick={() => handleLogout(authItems[0].user)} text="Çıkış Yap" icon="sign-out" />

                        }


                        {/* <Dropdown.Item as={NavLink}
                            to={`/candidateProfile/${authItems[0].user.id}`} text="Profil" icon="info" />
                        <Dropdown.Item as={NavLink}
                            to={`/favorite/${authItems[0].user.id}`} text="Favorileriniz" icon="info" />

                        <Dropdown.Item text="Ayarlar" icon="cog" />
                        <Dropdown.Item onClick={()=>handleLogout(authItems[0].user)} text="Çıkış Yap" icon="sign-out" /> */}

                    </Dropdown.Menu>
                </Dropdown>


            </Menu.Item>

        </div>
    )
}
