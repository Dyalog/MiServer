# /SampleMiSites/MS2/ #
## Converting or Running MiServer 2 content under MiServer 3 ##
The MS2 sample MiSite is intended to give someone familiar with MiServer 2 guidance on using MiServer 3.

The fundamental difference between MiServer versions 2 and 3 is with MiServer 2 you create the HTML content by concatenating character vectors 
whereas with MiServer 3 you "Add" objects representing HTML elements to your page and let MiServer render them to create the final HTML.
The advantage of using MiServer 3 is that it's easier and more consistent to build HTML content under program control.

You have a couple of options for running a MiServer v2 MiSite under MiServer v3.
* You can rewrite your MiPage's to use MiServer 3 syntax
* You can make some minor modifications to your MiPage's and continue to run your MiServer 2 style code.

In either case: 
1. Download or clone the MiServer 3 repository.
2. Create or move your MiServer 2 MiSite  
In MiServer 2, it was typical to locate your MiSite within MiServer's directory structure.  
We recommend that you **NOT** do so with MiServer 3 as it could complicate updating MiServer 3 in the future.
    We **DO** recommend that you maintain your MiSite in a separate directory not under MiServer 3.

If you i
First, you should copy the basic file structure of /SampleMiSites/MS2/ into your MiSite. In particular:
* The /Code/ folder MUST contain HTMLInput.dyalog
* The /Code/Templates/ folder MUST have MildPage.dyalog and MS2Page.dyalog 
1. Continue to use the MiServer 2 method of constructing the HTML content.  To do this you need to:
    1. If you use the MiPage base class for your pages, you will need to change the class name from MiPage to MS2Page.
    ```[APL]
    :Class MyMiServerPage : #.MiPage
    ```
    should be changed to  
    ```[APL]
    :Class MyMiServerPage : #.MS2Page
    ```