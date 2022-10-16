import React from 'react'
import {ProfileResponseType} from "../../../../api/api";
import {TypedDispatch} from "../../../../redux/redux-store";
import {useDispatch} from "react-redux";
import {useFormik} from "formik";
import {updateProfile} from "../../../../redux/profile-reducer";
import s from "../ProfileInfo.module.scss";

type ProfileDataFormType = {
    profile: ProfileResponseType
    setEdit: (value: boolean) => void
    contactsKeysArr: Array<string>
}
interface IObjectKeys {
    [key: string]: string | boolean;
}

export interface FormDataType extends IObjectKeys {
    aboutMe: string,
    facebook: string,
    website: string,
    vk: string,
    twitter: string,
    instagram: string,
    youtube: string,
    github: string,
    mainLink: string,
    lookingForAJob: boolean
}
type contactsValuesType = {
    [facebook: string]: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}
export const ProfileDataForm = ({profile, setEdit, contactsKeysArr}: ProfileDataFormType) => {
    const dispatch: TypedDispatch = useDispatch();
    let contactsValues = {} as contactsValuesType
    contactsKeysArr.forEach(key => {contactsValues[key] = profile.contacts[key] ? profile.contacts[key] : ''} )
    const formik = useFormik({
        initialValues: {
            'aboutMe': profile?.aboutMe ? profile.aboutMe : '',
            'lookingForAJob': profile?.lookingForAJob ? profile.lookingForAJob : false,
            'facebook': profile.contacts.facebook ? profile.contacts.facebook : '',
            'website': profile.contacts.website ? profile.contacts.website : '',
            'vk': profile.contacts.vk ? profile.contacts.vk : '',
            'twitter': profile.contacts.twitter ? profile.contacts.twitter : '',
            'instagram': profile.contacts.instagram ? profile.contacts.instagram : '',
            'youtube': profile.contacts.youtube ? profile.contacts.youtube : '',
            'github': profile.contacts.github ? profile.contacts.github : '',
            'mainLink': profile.contacts.mainLink ? profile.contacts.mainLink : '',
            //contacts: contactsValues
        } as FormDataType,

        validate:(values) => {
            const errors = {} as IObjectKeys
            const URL = /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/
            contactsKeysArr.forEach(key => {
                if (typeof values[key] === "string") {
                    const value = values[key].toString() as string
                    if (value.match(URL) || (value.trim() === '')) {
                        delete errors[key]
                    } else {
                        console.log(`valueError:!${values[key]}!`)
                        errors[key] = 'incorrect URL adress'
                    }
                }
            })
            if (values.aboutMe.length > 201) {
                errors.aboutMe = 'max number of symbols'
            }

            return errors
        },
        onSubmit: (values) => {
            const err = []
            contactsKeysArr.forEach((key, i) => {
                if (formik.errors[key]) {
                    err[i] = key
                }
            })
            if (formik.errors.aboutMe) {
                err.push(formik.errors.aboutMe);
            }
            console.log('err' + err)
            if (err.length) {
                return
            } else {
                dispatch (updateProfile(formik.values))
                        setEdit(false);
            }

        },
    });
    // console.log(`ddddddd:${(!!formik.errors)}!`)
    console.log('Errors' + formik.errors);
    return (
        <form style={{margin: '8px 0px 8px 0px'}} className={s.formContacts} onSubmit={formik.handleSubmit}>
            <div><label htmlFor="aboutMe">About me</label>
                <textarea
                    id="aboutMe"
                    name="aboutMe"
                    onChange={formik.handleChange}
                    value={formik.values.aboutMe}
                />
                {
                    formik.errors.aboutMe && <div style={{color: 'red'}}>{formik.errors.aboutMe}</div>
                }
            </div>
            <div><label htmlFor="lookingForAJob">lookingForAJob</label>
                <input
                    id="lookingForAJob"
                    name="lookingForAJob"
                    type="checkbox"
                    onChange={formik.handleChange}
                    checked={formik.values.lookingForAJob}
                /></div>
            <b>Contacts:</b>
            {contactsKeysArr.map(key => <div key={key}>
                <label htmlFor={key}>{key}</label>
                <input
                    id={key}
                    name={key}
                    type="text"
                    onChange={formik.handleChange}
                    value={String(formik.values[key])}
                />
                    {
                        formik.errors[key] && <div style={{color: 'red'}}>{formik.errors[key]}</div>
                    }
            </div>
            )

            }
            {/*<div><label htmlFor="github">github</label>*/}
            {/*<input*/}
            {/*    id="github"*/}
            {/*    name="github"*/}
            {/*    type="text"*/}
            {/*    onChange={formik.handleChange}*/}
            {/*    value={formik.values.github}*/}
            {/*/></div>*/}
            {/*<div><label htmlFor="mainLink">mainLink</label>*/}
            {/*<input*/}
            {/*    id="mainLink"*/}
            {/*    name="mainLink"*/}
            {/*    type="text"*/}
            {/*    onChange={formik.handleChange}*/}
            {/*    value={formik.values.mainLink}*/}
            {/*/></div>*/}
            {/*<div><label htmlFor="website">website</label>*/}
            {/*    <input*/}
            {/*        id="website"*/}
            {/*        name="website"*/}
            {/*        type="text"*/}
            {/*        onChange={formik.handleChange}*/}
            {/*        value={formik.values.website}*/}
            {/*    /></div>*/}
            {/*<div><label htmlFor="facebook">facebook</label>*/}
            {/*<input*/}
            {/*    id="facebook"*/}
            {/*    name="facebook"*/}
            {/*    type="text"*/}
            {/*    onChange={formik.handleChange}*/}
            {/*    value={formik.values.facebook}*/}
            {/*/></div>*/}
            {/*<div><label htmlFor="vk">vk</label>*/}
            {/*<input*/}
            {/*    id="vk"*/}
            {/*    name="vk"*/}
            {/*    type="text"*/}
            {/*    onChange={formik.handleChange}*/}
            {/*    value={formik.values.vk}*/}
            {/*/></div>*/}
            {/*<div><label htmlFor="twitter">twitter</label>*/}
            {/*<input*/}
            {/*    id="twitter"*/}
            {/*    name="twitter"*/}
            {/*    type="text"*/}
            {/*    onChange={formik.handleChange}*/}
            {/*    value={formik.values.twitter}*/}
            {/*/></div>*/}
            {/*<div><label htmlFor="instagram">instagram</label>*/}
            {/*<input*/}
            {/*    id="instagram"*/}
            {/*    name="instagram"*/}
            {/*    type="text"*/}
            {/*    onChange={formik.handleChange}*/}
            {/*    value={formik.values.instagram}*/}
            {/*/></div>*/}
            {/*<div><label htmlFor="youtube">youtube</label>*/}
            {/*<input*/}
            {/*    id="youtube"*/}
            {/*    name="youtube"*/}
            {/*    type="text"*/}
            {/*    onChange={formik.handleChange}*/}
            {/*    value={formik.values.youtube}*/}
            {/*/></div>*/}
            <button type="submit">Submit</button>
        </form>
    );


}
