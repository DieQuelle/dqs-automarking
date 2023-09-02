# DQ's Auto Marking Weakaura Tools

This Tool allows you to process data and generate custom options based on the data given.
The Main Idea is that people who are able to collect data from WoWhead or any other source can create a marking Weakaura based on their collected data.

Due to weakaura limits its almost impossible to do that ingame for that count of mobs we are talking.
Just to give you an example ICC Trash Mobs are about 115 - generated CustomOptions will be around 7000 lines of code.

This might clear up your questions. [Diagram](https://github.com/DieQuelle/dqs-automarking/blob/main/diagram.md)







<h2>DQ's Auto Marker for ICC | by <img width="27" src="https://i.imgur.com/qz0L6Zk.png" alt="phoenix-logo"> p h o e n i x -  Razorfen
</h2>

[DQ's Auto Marker for Icecrown Citadel Trash](https://wago.io/Ck9JAf55V)

<br>


## CSV Parser


- [CSV-Parser v2.2](https://automarker.d-q.xyz/csvparse_v2.html)
- [Sample CSV](https://github.com/DieQuelle/dqs-automarking/blob/main/example.csv)

---
<br>
<br>

## Obtain Data for the Marking Weakaura 

1. Obtain data from WoWHead or other similar sources.
2. Format your CSV according to the provided example.csv.

   > ⚠️ **Note:** If you're using Excel, ensure you export in the "CSV UTF-8 with delimiter" format.
   >
   > The file should include: Zone Name, Monster Name, NPCID, type, default, d1, d2, d3, d4, and comment.

<br>


---
<br>


## How to Create a New WeakAura with my own Custom Options? 

1. Begin by creating a new WeakAura.
2. Open this Weakaura [here](https://wago.io/hBttee1ip).
3. Go to left navigation panel, open the Editor and click on Export/Fork Changes (top right button)
4. Click Fork Weakaura. (Middle Button) (Please select unlisted or )
5. In the left navigation panel, open the editor and select "Table-Data" (it should be open already)
6. Copy the entire "Table Data" content.
7. Upload your file to the [CSV-Parser v2](https://automarker.d-q.xyz/csvparse_v2.html).
8. Insert the "Table Data" content.
9. Click "Upload and Process".
10. Copy the content from "Updated Table Data".
11. Open your Weakaura on wago.io.
12. In the left navigation panel, open the editor and select "Table-Data".
13. Replace the entire content.
14. Scroll to the top and click save.
15. **Important:** Reload the page.
16. Copy the new Import String.
17. Update your local WeakAura within your WoW client by importing the new string.

   > 🔴 **Important:** 
   >
   > Be cautious about introducing escape characters when adding custom options from a CSV. While there is a workaround for certain escape characters, it's recommended to avoid unnecessary ones.
   >
   > The CSV File gets validated. Open Browser Console for Log and Erros (Press F12)

<br>


---
<br>


### To-Do List

- [x] Basic CSV parser implementation.
- [x] Draft initial documentation.
- [x] Develop table data merger for automatic output of the complete table with only the updated author options.
- [x] Produce a blank WeakAura with relevant content.
- [x] Thoroughly document the process step-by-step.
- [x] Add options to set default option true/false through csv.
- [x] Add options to set markers based on csv, respective its template d1-d4
- [x] Add templates and refactor so it makes more sense -> (zero,one,two,three,four)
- [x] Thoroughly document the process step-by-step.
- [ ] Add a visual How To process.
- [ ] Promote and share the tool. 🎉


<br>


---
<br>


## Acknowledgements

Thank you to **Maey** from Gehennas and **Ryts** for their invaluable contributions during the Classic and TBC eras.

The main WeakAura has its origins in [this](https://wago.io/-4-XO5Mst) and [this source](https://wago.io/WvTWjRwcu).

---

<br>
<br>
<br>
<div align="center">

**\<p h o e n i x> Razorfen**

<img width="360" src="https://i.imgur.com/qz0L6Zk.png">
</div>