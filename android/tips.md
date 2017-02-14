# Tips ⭐ 🙌

## DENSITY-INDEPENDENT PIXELS
*   Make touch targets `48dp` atlest

## TextView Text Size

*   [Material Design Typography](https://material.io/guidelines/style/typography.html)

*   [Text Apperance](https://plus.google.com/+AndroidDevelopers/posts/gQuBtnuk6iG)

## Evenly Spacing Out Children Views


Equally weighted children
To create a linear layout in which each child uses the same amount of space on the screen, set the `android:layout_height` of each view to `"0dp"` (for a `vertical layout`) or the `android:layout_width` of each view to "0dp" (for a `horizontal layout`). Then set the `android:layout_weight` of each view to `"1"`.

*   [More Info- LinearLayout weight](https://developer.android.com/guide/topics/ui/layout/linear.html?utm_source=udacity&utm_medium=course&utm_campaign=android_basics)

## Use Relative layout view group to build a list item

![List item](./list-item.png)

## Use Padding or Margin to add white space

```java
// *** NOTE THIS USES A VIEW GROUP (Linear/RelativeLayout)


//Adding a single margin value
android:layout_margin="..dp"

//OR
android:layout_marginLeft="..dp"
android:layout_marginRight="..dp"
android:layout_marginTop"..dp"
android:layout_marginBottom"..dp"
```
*   More info 👉 [Metrics & Keylines](https://material.io/guidelines/layout/metrics-keylines.html#metrics-keylines-baseline-grids)


## ⚠️ There is a new layout in the view group known as `ConstraintLayout`

> `ConstraintLayout`- a tool that makes it super fast to create responsive UIs with many different types of components.

---
## Linear Layout vs Relative Layout

![LINEAR VS RELATIVE](./linear-vs-relative.png)

## Linear Layout

*   Great for aligining views in `rows`/`columns`.


*   Good way to divide up one space using `layout weights`.


## RelativeLayout

*   Great for `positioning` elements relative to one another.

*   Easier to `overlap` views

*   Example. 👉 Putting `B` below `A`  or putting `A` inside `B`

## Drawing to App 🎨

1.  Select the Views

2.  Position the Views

3.  Style the Views

4.  Explain your Card

5.  Share your Card 🙌
