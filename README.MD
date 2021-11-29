Create a repo of tools to apply to Firebase Libraries 

1. Tokenize Images 
    Criteria: 
        Get an Existing Log of Images using Firestore, pull down NOSQL JSON with Image URLS
        Download the Image URL, Convert to Token based on Pixel Parameters
        Upload to Firebase Storage the new Token Image, return new URL
        Update NOSQL Document with new Token_Image_Url 
        Iterate 