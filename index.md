---
title: Biblical Prophecy Database
layout: default
---

# Biblical Prophecy Database

<table id="prophecy-table">
  <thead>
    <tr>
      <th>ID</th>
      <th>Source Verse</th>
      <th>Summary</th>
      <th>Type</th>
      <th>Category</th>
      <th>Fulfilled</th>
      <th>Confidence</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    {% for prophecy in site.prophecies %}
    <tr>
      <td>{{ prophecy.id }}</td>
      <td>{{ prophecy.source_verse }}</td>
      <td>{{ prophecy.summary | truncate: 30 }}</td>
      <td>{{ prophecy.type }}</td>
      <td>{{ prophecy.category }}</td>
      <td>{{ prophecy.fulfilled }}</td>
      <td>{{ prophecy.confidence_level }}</td>
      <td><a href="{{ prophecy.url }}">Details</a></td>
    </tr>
    {% endfor %}
  </tbody>
</table>
