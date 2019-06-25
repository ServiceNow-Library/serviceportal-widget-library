(function () {
  (function () {
    var grCases = new GlideRecord('sn_customerservice_case')
    grCases.query();
    data.listItems = [];
    while (grCases.next()) {
      data.listItems.push({
        number: grCases.number.getDisplayValue(),
        short_description: grCases.short_description.getDisplayValue(),
        state: grCases.state.getDisplayValue(),
        owner: grCases.contact.getDisplayValue(),
        created_on: grCases.sys_created_on.getDisplayValue(),
        due_date: grCases.due_date.getDisplayValue(),
        sys_id: grCases.getUniqueValue()
      })
    }
  })();
})();