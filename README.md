# DQS-Auto Marking
Toolset for creating forks of automarker weakauras based on csv data.

## DQ's Auto Marker for ICC by <p h o e n i x> Razorfen

[DQ's Auto Marker for ICC](https://wago.io/Ck9JAf55V)

## CSV Parser

[CSV-Parser](https://automarker.d-q.xyz/csvparse_v1.html)

[Example.CSV](../example.csv)

1. Get Data from wowhead or any other source
2. Create CSV according to example.csv
* It includes Zone Name, Monster Name, NPCID, type, default, d1, d2, d3,d4,comment
 
> [!WARNING]
> Make Sure you export in "CSV UTF-8 with delimiter" in Excel if you use this.

3. Upload file to [CSV-Parser](https://automarker.d-q.xyz/csvparse_v1.html)
4. You now have the author-options as raw Code

---

## How do I create a fresh Weakaura from this? 


1. Basically you have to create fresh New Weakaura.
2. Copy Trigger
3. On Init Custom Action
4. Change Custom Option Group "optICC" to your liking make sure its updated on all occurences inside the above mentioned parts.
5. Upload it Empty to wago.io (please upload it as unlisted weakaura and include a backlink)
6. Go to Editor and open "Table-Data" > look for `"authorOptions": [...]` **line 34**
7. Update the Author Options
8. Press Save & Reload the Page
9. Copy Import String
10. Update Local Weakaura in your WoW Client by Importing the New String

See Screenshot:
<img src="/images/howto1.png" width="200">

> [!IMPORTANT]
> For 1. - 3. Copy it from this Weakaura: https://wago.io/Ck9JAf55V

---

### TODO

- [x] Basic CSV Parser
- [x] Create Some Basic Documentation
- [ ] Create Full Table Data Merger so it will automatically output the whole Table with just the updated stuff in author options
- [ ] Create Empty Weakaura with working Content
- [ ] Document the Full Process Step by Step
- [ ] Spread my work :tada:
  
---

## Contributions

Thanks to **Maey** Gehennas and **Ryts** for their work in Classic and TBC.

The Main Weakaura is a fork of https://wago.io/-4-XO5Mst and https://wago.io/WvTWjRwcu 

---


**GM of \<p h o e n i x> Razorfen**

<img src="https://i.imgur.com/qz0L6Zk.png" width="100"> 

