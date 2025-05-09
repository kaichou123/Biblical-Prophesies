---
http://127.0.0.1:4000/evidence/
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
    </tr>
  </thead>
  <tbody>
    {% for prophecy in site.prophecies %}
    <tr>
      <td>{{ prophecy.prophecy_id }}</td>
      <td><a href="{{ prophecy.url }}">{{ prophecy.source_verse }}</a></td>
      <td>{{ prophecy.summary | truncate: 50 }}</td>
      <td>{{ prophecy.type }}</td>
      <td>{{ prophecy.category }}</td>
      <td>{{ prophecy.fulfilled }}</td>
      <td>{{ prophecy.confidence_level }}</td>
    </tr>
    {% endfor %}
  </tbody>
</table>



