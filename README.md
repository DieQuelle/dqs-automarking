# DQS-Auto Marking

A toolset for creating forks of automarker WeakAuras based on CSV data.

## DQ's Auto Marker for ICC by <p h o e n i x> Razorfen

- [DQ's Auto Marker for ICC](https://wago.io/Ck9JAf55V)

## CSV Parser

- [CSV-Parser v1](https://automarker.d-q.xyz/csvparse_v1.html)
- [CSV-Parser v2](https://automarker.d-q.xyz/csvparse_v2.html)
- [Sample CSV](../example.csv)

---

## Obtain Data for the Marking Weakaura 

1. Obtain data from WoWHead or other similar sources.
2. Format your CSV according to the provided example.csv.

   > ⚠️ **Note:** If you're using Excel, ensure you export in the "CSV UTF-8 with delimiter" format.
   >
   > The file should include: Zone Name, Monster Name, NPCID, type, default, d1, d2, d3, d4, and comment.

---

## How to Create a New WeakAura with my own Custom Options? 

1. Begin by creating a new WeakAura.
2. Copy the Import String from [here](https://wago.io/hBttee1i).
3. Re-import it on Wago.io.
4. Upload it to wago.io as an unlisted WeakAura, ensuring to test it first and include a backlink.
5. In the left navigation panel, open the editor and select "Table-Data".
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

---

### To-Do List

- [x] Basic CSV parser implementation.
- [x] Draft initial documentation.
- [x] Develop table data merger for automatic output of the complete table with only the updated author options.
- [x] Produce a blank WeakAura with relevant content.
- [x] Thoroughly document the process step-by-step.
- [ ] Add a visual How To process.
- [ ] Promote and share the tool. 🎉

---

## Acknowledgements

A heartfelt thank you to **Maey** from Gehennas and **Ryts** for their invaluable contributions during the Classic and TBC eras.

The main WeakAura has its origins in [this source](https://wago.io/-4-XO5Mst) and [this one](https://wago.io/WvTWjRwcu).

---

**Guild Master of \<p h o e n i x> Razorfen**

![GM Logo](https://i.imgur.com/qz0L6Zk.png)
