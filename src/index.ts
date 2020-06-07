//import { Bookmark } from "./BookmarkClass";
let siteName = document.getElementById('websiteName') as HTMLInputElement;
let siteUrl = document.getElementById('websiteUrl') as HTMLInputElement;
let addButton = document.getElementById('addButton') as HTMLButtonElement;



///////////////////////////////////////////////

class Bookmark
{

    Title: string;
    URL: string;
    icon: string;
    favourite: boolean = false;
    

    constructor (webtitle: string, ficon: string)
    {
        this.Title = webtitle;
        this.URL = ficon;
        this.icon = "";

    

    }

    getURL(val: string){
        this.URL = val;
        if(this.URL == ""){
            alert("Please Enter URL");
            return;
        }
        return;
    }

    setURL(id : string){
        this.URL = id;
    }

    CreateMyBookmark(Title : string, MainURL : string)
    {   

        let outputForm = document.getElementById('outputForm') as HTMLFormElement;

        let siteTitle = Title;
        let siteMainURL = MainURL;

        let bookmarkItem = document.createElement("div") as HTMLDivElement;
        bookmarkItem.classList.add("bookmarkItem");
        
        // Set the icon for the website
        let icon = `https://s2.googleusercontent.com/s2/favicons?domain=${siteMainURL}`;
        let img = document.createElement("img") as HTMLImageElement;
        img.setAttribute('src', icon);
        bookmarkItem.appendChild(img);

        // set the website name
        let title = document.createElement("h5");
        title.appendChild(document.createTextNode(siteTitle));
        bookmarkItem.appendChild(title);

        // set the website url
        let url = document.createElement("a");
        let url2 = siteMainURL;
        url.setAttribute('href', url2 )
        url.classList.add("urlDisplay");

        // Checks URL length to display
        if (url2.length > 20)
        {
            url.appendChild(document.createTextNode(url2.substring(0,20)+ "..."));
        }
        else 
        {
            url.appendChild(document.createTextNode(url2)); 
        }

        bookmarkItem.appendChild(url);

        // set up the favourite icon
        let favouriteIcon = document.createElement('a');
        favouriteIcon.href = "#";
        favouriteIcon.innerHTML = '<i class="far fa-heart"></i>';
        favouriteIcon.classList.add("favIcon")
        bookmarkItem.appendChild(favouriteIcon);
            
        // set the delete icon

        let a = document.createElement("a");
        a.href = "#";
        a.innerHTML = '<i class="fas fa-trash-alt"></i>';
        bookmarkItem.appendChild(a);
        outputForm.appendChild(bookmarkItem);

        //Clearing the text boxes
        siteTitle = "";
        siteMainURL = "";
        
        ////////////////////////FUNCTIONS//////////////////////
    
        // Favourite icon toggle function
        favouriteIcon.onclick = function()
        {
            let state1 = '<i class="far fa-heart"></i>';
            let state2 = '<i class="fas fa-heart"></i>';
            
            if(favouriteIcon.innerHTML == state1)
            {
                favouriteIcon.innerHTML = '<i class="fas fa-heart"></i>';
            }
            else if(favouriteIcon.innerHTML == state2) 
            {
                favouriteIcon.innerHTML = '<i class="far fa-heart"></i>';

            }    
        }

        // Bookmark Delete Fucntion
        a.onclick = function () 
        {
            let del = a.parentElement as HTMLElement;
            if(del == null) return;
            del.remove();
        }
   
    }
}

///////////////////////////////////////////////


let myob = new Bookmark("MYOB Australia", "www.myob.com");
myob.CreateMyBookmark("MYOB Australia", "www.myob.com");

let swinburne  = new Bookmark("Swinburne University", "www.swinburne.edu.au");
myob.CreateMyBookmark("Swinburne University", "www.swinburne.edu.au");



addButton.onclick = function ()
{
    if(addButton == null || undefined)
    {
        alert("Add Button not found.");
    }
        else 
        {   
            let Validate = new Bookmark(siteName.value, siteUrl.value);
            Validate.getURL(siteUrl.value);
            
            
            let bookmark = new Bookmark(siteName.value, siteUrl.value);
            bookmark.CreateMyBookmark(siteName.value, siteUrl.value);
            

        }

        siteName.value = "";
        siteUrl.value = "";

}