---
layout: post
title:  "B2B Calendar Sharing in Office 365"
date:   2022-07-10 00:57:46 -0400
categories: O365
hero_img: Calendar_Share.png
author: Jon Knight
---
I recently came across a unique situation where one of our product teams had contracted with a 3rd party vendor for some project management staff augmentation. Since the teams were regularly working very closely together, scheduling meetings had become a hassle. We've all been a part of those dreaded email threads where everyone spouts off their availability in hopes of finding an overlapping timeslot. It's not ideal, to say the least. Since the 3rd party contractor was also using Office365, I thought this could be an excellent chance to try Office365's B2B calendar sharing. In this post, I'll discuss the features of calendar sharing and my implementation process.

### Overview

So first off, what does calendar sharing actually do? Well, in short, it allows you to share some (or all) of your organization's calendar availability with another organization. This is meant to ease collaboration between the two tenants, without being directly connected.


### Getting Started

Let's start by heading into the [Exchange Admin Center](https://admin.exchange.microsoft.com) and using the left navigation menu to navigate to **Organization** > **Sharing**. 

![Sharing Admin Center](/assets/images/post_imgs/Sharing_Admin_Center.png)

On this page, you'll see two tables. We're most interested in the upper table, since this applies to all (or many) users in your organization. In contrast, the lower table - **Individual Sharing** - governs how your users can choose to share their own calendars manually with other users. In the **Organization Sharing** table, we can easily add a new record. This record will tell Exchange Online to share calendar availability with whichever M365 domains we choose, using the settings we choose. Lets look at the options available when adding a new relationship via the "+" button.

![Add new sharing relationship pop-up](/assets/images/post_imgs/Sharing_Add_New.png)

After we choose a display name for the relationship itself, we need to choose the domains with which we'll share our calendars. It's important to note that once you enter any domain here, Microsoft will search for the tenant that currenty controls that domain, and after submitting this form it will add **all** of those domains to the relationship. This can be limited to a smaller set of domains later though. 

We'll then choose what type of data to share with this tenant, i.e. free/busy or full detail. We can also choose to only share the calendars of specific user groups, however these groups must be mail-enabled security groups. Distribution Groups or 365 groups will not work here. 

After clicking Save, Microsoft will query for any other domains associtated to the referenced tenant, and then enable calendar sharing. After a short sync time, users at the external organization will begin seeing your users' calendar availability. Keep in mind though, this sync is one-way only. That means if you want your users to see the availability of the external org, they will need to follow these same steps in their tenant. 