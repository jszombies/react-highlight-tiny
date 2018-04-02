const RegexpUtil = {
  escape: query => (
    String(query).replace(/[\\^$*+?.()|[\]{}]/g, '\\$&')
  ),
};

export default RegexpUtil;
