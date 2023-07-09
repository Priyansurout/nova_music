import React from 'react'
import MusicCardes from './MusicCardes'
import {useState} from 'react'



export default function SearchPage(props) {

    const [searchtext,SetsearchText] = useState("")
    const [musicdata, SetMusic] = useState(false)


    const Callfunc = () => {

        console.log("-------------------------------------- GO BUTTON IS CLICKED --------------------------------------")
        let name = document.getElementById("text_name").value;
        SetsearchText(name);
        props.search(name);
        // if (searchtext == ""){
        //     return console.log("Not correct input")
        // }
        props.search(searchtext);
        Work_onclick();
    }

    // const Setname = () => {
     
        
    // }

    // const search_name = () => {
    //     props.search(searchtext);
        
    // }
 
    




    // const Work_onclick = async () => {
    //     let music_data = await props.search()
    //     console.log("click to go here")
    //     if (musicdata){
    //         console.log("change 1")
            
    //         SetMusic(<div className='container my-100 mx-4'>
            
    //         <div className='row'>
    //             {music_data.map( element => {
    //                             return <div className='container my-100 mx-4 col-md-4 my-3'>
    //                                 <MusicCardes  music_img={element.images[0].url} name_music={element.name} uri={element.uri} id={element.name}/> 
    //                             </div>
    //                         })} 
    //         </div>
    //     </div>)
    //     }
    //     else{
    //         console.log("change 2")
    //         SetMusic(<MusicCardes />)
    //     }
 
    // }

    
    const Work_onclick = () => {

        if (props.data_art){

            SetMusic(true)
        }else{
            SetMusic(false)
        }
    }


    

  
  return (
    <>
        {/* GO FORM HERE */}
        
        <div className="flex justify-between py-7 px-10 bg-gray-50 border-b">


            <form >
                <span class="block text-xl font-medium text-slate-800 ml-3 mb-2">Artist-Name:</span>
                <input type='text' name="search" placeholder='Search Name' id="text_name"  className='px-3 py-2 font-semibold placeholder-gray-500 text-black rounded-2xl border-none ring-2  '
                                                           />
                <button type="button" className="btn btn-outline-primary mx-3" onClick={Callfunc} >GO</button>
            </form>
            
        </div>
        
        <div className='container mx-3 my-3'>
    
                    <div className='row'>
                        {musicdata && props.data_art?.map( element => {
                                        return <div key={element.uri} className='col-md-4 my-3'>
                                            <MusicCardes  music_img={element.images[0].url} name_music={element.name} uri={element.uri} /> 
                                        </div>
                                    })} 
                    </div>

        </div>
       

        <div className='container'>
            {!musicdata && <MusicCardes/>}
        </div>
       



        

    </>
  )
}
