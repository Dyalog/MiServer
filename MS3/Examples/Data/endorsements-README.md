# Newspaper presidential endorsements, 1980-

See also: [http://noahveltman.com/endorsements/](http://noahveltman.com/endorsements/)

Data on who the top ~100 US newspapers by circulation endorsed for president in each election from 1980 through 2016. Additions/corrections welcome.

The data is provided as a CSV file with the following columns:

* `publication`: the name of the publication, as of 2016 (see notes below about renamings/mergers/etc.)
* `year`: the year of the endorsement
* `endorsed`: who the paper endorsed that year
* `source`, `source2`: sources for the data, either URLs or citations
* `notes`: any other relevant notes about the endorsement or source

### Notes on sources

Whenever possible, I've linked to primary sources. In some cases, the source is something like the [American Presidency Project](http://www.presidency.ucsb.edu/data.php) because the original URL on the newspaper's site is gone. A number of pre-2000 endorsements were confirmed by a list provided by the Reagan Library and microfilm of old issues of *Editor & Publisher*. I tracked down the rest through a mix of various newspaper archives and emails and phone calls to local public libraries and the newsrooms themselves.

In cases where the source is an article from a paid database or old microfilm, I've tried to make the citation as detailed as possible, but posting all the originals would be a copyright issue. Contact me if you want to see the original article behind a citation.

In a few cases, I don't have the full citation but have included the details of who confirmed the endorsement.

At some point I'll try to add Internet Archive URLs to the CSV to give the existing URLs a longer shelf life.

### Notes on mergers

One thing that makes this data collection particularly challenging is the intricate history of newspaper mergers, splits, and renamings. For example, many current papers are the result of a merger between a forming morning paper and a former afternoon/evening paper (e.g. the *Milwaukee Journal* and *Milwaukee Sentinel*). In some cases those papers shared an editorial board, and in some cases they didn't. In some cases, those papers published a joint Sunday edition pre-merger and made endorsements there.

I've done my best to follow these mergers, although it's not always clear what is a merger and what is simply a paper going out of business and being partially absorbed by a competitor.

In a case where two pre-merger papers endorsed different candidates, it's listed with a slash (e.g. `Bush/Dukakis`) and an explanation in the `notes` column (e.g. `Atlanta Journal endorsed Bush, Atlanta Constitution endorsed Dukakis`). If they both endorsed the same candidate, it's listed as a single candidate name and an explanation in the `notes` column (e.g. `Honolulu Star-Bulletin and Honolulu Advertiser both endorsed Clinton`).

Here's a non-exhaustive list of mergers and changes relevant to the data:

* *Milwaukee Journal-Sentinel*: morning *Sentinel* and afternoon *Journal* merged in 1995
* *Atlanta Journal-Constitution*: morning *Constitution* and afternoon *Journal* fully merged in 2001
* *Arkansas Democrat-Gazette*: morning *Gazette* and afternoon *Democrat* merged in 1991
* *Daytona Beach News-Journal*: morning *Journal* and evening *News* merged in 1986, but they made shared Sunday endorsements prior to that
* *Greensboro News & Record*: morning *Daily News* and afternoon *Record* fully merged in 1984
* *Honolulu Star-Advertiser*: *Advertiser* and *Star-Bulletin* merged in 2010
* *Lexington Herald-Leader*: morning *Herald* and afternoon *Leader* merged in 1983
* *Minneapolis Star and Tribune*: morning Tribune and evening *Star* merged in 1982
* *Palm Beach Post*: afternoon *Palm Beach Times* was merged in 1987
* *Pittsburgh Tribune-Review*: was the *Greensburg Tribune-Review* until 1992 when it went metro area-wide
* *Riverside Press-Enterprise*: morning *Enterprise* and evening *Press* merged in 1983
* *Tampa Bay Times*: named *St. Petersburg Times* through 2011
* *San Antonio Express-News*: morning *Express* and evening *News* fully merged in the mid 1980s
* *San Diego Union-Tribune*: morning *Union* and evening *Tribune* merged in 1992
* *South Florida Sun-Sentinel*: absorbed *Pompano Sun-Sentinel*, went variously by *Sun Sentinel* and *Fort Lauderdale Sun-Sentinel*
* *St. Paul Pioneer Press*: *Pioneer* and *Dispatch* merged in 1985
* *Jackson Clarion-Ledger* - absorbed *Daily News* in 1982
* *Chattanooga Times Free Press* - *News-Free Press* and *Times* began merging in the 1980s, but maintain separate editorial boards (the only paper on this list that _still_ has two editorial boards post-merger, as far as I know)

I've also done my best to use the current canonical name for each paper (sometimes including the city even if it's not officially part of the name, for clarity).  If an endorsement occurred when the paper used a different name, I've tried to note that in the `notes` column.

### Notes on newspapers included/excluded

Trying to determine a precise rank order for newspapers by circulation is a pretty pointless task. Most circulation data is either out-of-date, reported as a combination of multiple papers, highly suspect, or some combination of the three. This list isn't meant to be an authoritative source of circulation data, which is why I'm not including the circulation numbers themselves. I picked these ~100 papers based mostly on the weekday figures in the 2016 edition of [SRDS Circulation](http://www.kantarmedia.com/us/our-solutions/media-planning-tools/srds-media-planning-platform/srds-online-databases/newspaper-media). In a few cases, I had to use circulation figures from the [Alliance for Audited Media](http://auditedmedia.com/news/research-and-data/top-25-us-newspapers-for-march-2013/) instead, because SRDS reports only the combined circulation in the following cases:

* *Philadelphia Inquirer* and *Philadelphia Daily News*
* *Detroit Free Press* and *Detroit News*
* *San Jose Mercury News*, *East Bay Times*, et al. (as *Bay Area News Group*)
* *Dayton Daily News* and *Springfield News-Sun*
* *Salt Lake Tribune* and *Deseret News*

The CSV includes some additional data from other papers that I had already researched but have changed format, closed, or may not otherwise be in the top 100:

* *Seattle Post-Intelligencer* (went online-only in 2009)
* *Investor's Business Daily* (converted to weekly in May 2016)
* *La Opinión* (recent circulation data unavailable but probably no longer in the top 100)
* *Philadelphia Daily News* (recent circulation data unavailable but probably no longer in the top 100)
* *East Bay Times*, formerly *Contra Costa Times* (separate circulation data unavailable)
* *Tampa Tribune* (bought by *Tampa Bay Times* in 2016)
* *Pittsburgh Tribune-Review* ([convoluted merger history](https://en.wikipedia.org/wiki/Pittsburgh_Tribune-Review#/media/File:Pittsburgh_newspaper_consolidation_timeline.svg), ending print edition on November 30, 2016)

Depending on how you figure it, some other papers that might make the top 100 list but are not included for various reasons:

* *Washington Examiner* (became a weekly magazine in 2013)
* *Journal News* of the Lower Hudson Valley (mega-merger of ~10 other papers)
* *tbt* (Tampa Bay Times free edition, not included separately)
* *San Francisco Examiner* (became free in 2003)
* *LNP* (untangling the relatively recent Intelligencer Journal, New Era, and Sunday News merger)
* *Deseret News* (couldn't find recent separate circulation, but it seems to be well outside the top 100; doesn't endorse candidates)

### Notes on "anti-endorsements"

I've marked the most recent 2016 [USA Today](http://www.usatoday.com/story/opinion/2016/09/29/dont-vote-for-donald-trump-editorial-board-editorials-debates/91295020/) and [Washington Post](https://www.washingtonpost.com/opinions/donald-trump-is-a-unique-threat-to-american-democracy/2016/07/22/a6d823cc-4f4f-11e6-aa14-e0c1087f7583_story.html?utm_term=.e3665ffa67e8) editorials as "anti-endorsements" (`Not Trump`). There are at least two other similar cases, but I haven't marked them as such because they seem different in important ways:

* On August 2, 1992, the *Orange County Register* published an editorial entitled "Stand down, Mr. Bush," advising Bush not to seek reelection, but although they refer to it as a "disendorsement," it reads more as general criticism, not as advice to voters.
* On October 28, 1992 and November 3, 1996, the *Arkansas Democrat-Gazette* published a "non-endorsement" of Bill Clinton, but it also reads more as general criticism.

### Other notes

About 4% of the entries are still marked as "Unknown". In some of those cases, the probable endorsement is listed in the `notes` field but I haven't been able to confirm it.

The sources for these ~100 papers also include the endorsement information for literally hundreds of other papers for various years, but I had to draw the line somewhere. If you're looking for endorsement information for a specific paper that's not listed here, there's a good chance I have it on file somewhere at this point, so feel free to contact me for assistance.
