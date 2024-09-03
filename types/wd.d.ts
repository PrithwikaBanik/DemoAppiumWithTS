declare module 'wd' {
  // Add specific types for wd as needed
  // This is a basic placeholder type
  export interface WD {
      promiseChainRemote: (config: any) => any;
      // Add other methods and properties as needed
  }
  
  const wd: WD;
  export default wd;
}

