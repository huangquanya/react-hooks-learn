Basic Hooks

useState
useEffect
useContext

Additional Hooks

useReducer  const [state,dispatch] = useReducer()
useCallback
useMemo
useRef
useImperativeMethods(ref, createInstance, [inputs])将方法挂载到ref.current上  forwardRef((props,ref)=>{})使父组件能够将ref传到子组件中 配合使用
useLayoutEffect